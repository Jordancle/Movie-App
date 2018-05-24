import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../movie';
import { MovieServiceService } from '../../movie-service.service';
import { RatingService } from '../../rating.service';

import { Observable } from 'rxjs';

// For setting up using a parameter in the url
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

// For 'back' button
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movies: Movie[];
  movie: Movie;
  posterExists: boolean;
  rate: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieServiceService,
    private location: Location,
    private ratingService: RatingService
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    
    // Used to get the id from URL
    const id = this.route.snapshot.paramMap.get('id');  
    
    // This assigns the movie from getMovie to this.movie
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
        if (this.movie.posterUrl == "N/A") {
          this.posterExists = false;
        } else {
          this.posterExists = true;
        }
        this.rate = movie.userRating;
      });
  }

  // Sends the user back to the previous search screen
  goBack(): void {
    this.location.back();
  }

  onRatingSelect(rating: number) {
    this.ratingService.saveRating(this.movie.title, this.movie.imdbID, this.rate, this.movie.plot, this.movie.posterUrl);
  }

}
