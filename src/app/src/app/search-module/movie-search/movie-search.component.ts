import { Component, OnInit, Input, Output } from '@angular/core';
import { MovieServiceService } from 'src/app/movie-service.service';

import { Movie } from '../../movie';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movies: Movie[];
  searchKey: string;
  page: any;
  loading: boolean;
  totalItems: any;

  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // Get paramters from the URL

    // ============= Doing this would cause pageChanged to trigger twice causing the corresponding page to not highlight 
    this.route.queryParams.subscribe(params => {
      this.searchKey = params['searchKey'];
      this.page = parseInt(params['page']);
      this.getMovies(this.searchKey, this.page);
    });
    // =============

    // Use subscribe to trigger event when ever subject emits something
    this.movieService.totalResultsSubject
      .subscribe(totalResults => {
        this.totalItems = totalResults;
      });
  }


  getMovies(searchKey: string, page: string) {
    this.loading = true;
    this.movieService.getMovies(searchKey, page)
      .subscribe(movies => {
        this.movies = movies;
        this.loading = false;   // Indicate done loading after movies are loaded
      });
  }

  // New results are only fetched when the ENTER key is pushed
  onEnter(searchKey: string) {
    this.searchKey = searchKey;
    this.page = 1;
    this.router.navigate(['search'], { queryParams: { searchKey: this.searchKey, page: this.page } })
    // this.movieService.saveKey(this.searchKey);  // saves key in the movieService
  }

  onPageChanged(eventArgs: PageChangedEvent) {
    this.page = eventArgs.page;
    this.router.navigate(['search'], { queryParams: { searchKey: this.searchKey, page: this.page } })
    // this.loading = true;
  }
}
