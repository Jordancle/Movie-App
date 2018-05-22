import { Component, OnInit, Input } from '@angular/core';
import { MovieServiceService } from 'src/app/movie-service.service';

import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movies: Movie[];
  movie: Movie;
  searchKey: string = this.movieService.getKey();

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    // Call this.onEnter here so that when user goes Back(),
    // the search results will be called up again
    if (this.searchKey != null) {
      this.onEnter(this.searchKey);
    }
  }

  getMovies(searchKey: string) {
    this.movieService.getMovies(searchKey)
      .subscribe(movies => this.movies = movies);
  }

  onEnter(searchKey: string) {
    this.searchKey = searchKey;
    this.getMovies(this.searchKey);
    this.movieService.saveKey(this.searchKey);  // saves key in the movieService
  }
}
