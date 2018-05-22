import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../movie';
import { MovieServiceService } from '../../movie-service.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieServiceService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie(): void {
    //this.movies = this.movieService.getMovies();
    const id = this.route.snapshot.paramMap.get('id');   // Used to get the id from URL
    // This assigns the movie from getMovie to this.movie
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
        if (this.movie.posterUrl == "N/A") {
          this.posterExists = false;
        } else {
          this.posterExists = true;
        }
      });
  }

  // Sends the user back to the previous search screen
  goBack(): void {
    this.location.back();
  }

}
