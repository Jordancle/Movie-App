import { Component, OnInit, Input } from '@angular/core';

import { MovieServiceService } from 'src/app/movie-service.service';
import { Movie } from '../../movie';

import { MovieSearchComponent } from '../movie-search/movie-search.component';


@Component({
  selector: 'app-movie-dummy',
  templateUrl: './movie-dummy.component.html',
  styleUrls: ['./movie-dummy.component.css']
})
export class MovieDummyComponent implements OnInit {


  // @Input allows the dummy component to receive a 'movie' from where
  // it is called within the parent html file
  // movie-search.component.html
  @Input() movie: Movie;
  posterExists: boolean;

  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    if (this.movie.posterUrl == "N/A") {
      this.posterExists = false;
    } else {
      this.posterExists = true;
    }
    // this.getMovie();
    // this.getMovies(searchKey);
  }

  // getMovie(): void {
  //   // this.movieService.getMovie(this.movie.imdbID)
  //   //   .subscribe(movie => this.movie = movie);
  //   if (this.movie.posterUrl == "N/A") {
  //     this.posterExists = false;
  //   } else {
  //     this.posterExists = true;
  //   }
  // }

}
