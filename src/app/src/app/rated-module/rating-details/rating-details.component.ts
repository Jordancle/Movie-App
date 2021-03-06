import { Component, OnInit, Input } from '@angular/core';

import { MovieServiceService } from 'src/app/movie-service.service';
import { Movie } from '../../movie';
import { Rating } from '../../rating';

import { RatedComponent } from '../rated/rated.component';

@Component({
  selector: 'app-rating-details',
  templateUrl: './rating-details.component.html',
  styleUrls: ['./rating-details.component.css']
})
export class RatingDetailsComponent implements OnInit {


  // @Input allows the dummy component to receive a 'movie' from where
  // it is called within the parent html file
  // movie-search.component.html
  @Input() rating: Rating;
  posterExists: boolean;
  rate: number;

  constructor() { }

  ngOnInit() {

    this.rate = this.rating.userRating;
    if (this.rating.posterUrl == "N/A") {
      this.posterExists = false;
    } else {
      this.posterExists = true;
    }
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
