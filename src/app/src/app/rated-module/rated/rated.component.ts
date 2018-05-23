import { Component, OnInit } from '@angular/core';

import { RatingService } from '../../rating.service';
import { MovieServiceService } from '../../movie-service.service';
import { Movie } from '../../movie';
import { Rating } from '../../rating';
import { MovieDummyComponent } from '../../search-module/movie-dummy/movie-dummy.component';

// For 'back' button
import { Location } from '@angular/common';

@Component({
  selector: 'app-rated',
  templateUrl: './rated.component.html',
  styleUrls: ['./rated.component.css']
})
export class RatedComponent implements OnInit {

  ratings: Rating[];

  constructor(
    private ratingService: RatingService,
    private movieService: MovieServiceService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.ratings = this.ratingService.ratings;
  }

  // getMovies() {
  //   console.log(this.ratingService.ratings.length);
  //   for (var i = 0; i < this.ratingService.ratings.length; i++) {
  //     this.movieService.getMovie(this.ratingService.ratings[i].imdbID)
  //       .subscribe( movie => {
  //         this.movies[i] = movie;
  //         console.log(i + " " + movie);
  //        })
  //   }
  // }

  goBack(): void {
    this.location.back();
  }

}
