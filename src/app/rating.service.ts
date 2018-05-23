import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { Rating } from './rating';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin as observableForkJoin, Subject } from 'rxjs';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  ratings: Rating[] = [];

  constructor() {

  }

  getRating(imdbID: string): number {
    if (this.ratings != undefined) {
      for (var i = 0; i < this.ratings.length; i++) {
        if (this.ratings[i].imdbID == imdbID) {
          return this.ratings[i].userRating;
        }
      }
    }
    return 0;
  }

  saveRating(title: string ,imdbID: string, userRating: number) {
    let rating: Rating = new Rating;
    rating.title = title;
    rating.imdbID = imdbID;
    rating.userRating = userRating;
    let i: number;
    if ((i = this.findRatingIndex(imdbID)) != -1) {
      this.ratings[i] = rating;
    } else {
      this.ratings.push(rating);
    }
    console.log(this.ratings);
  }


  findRatingIndex(imdbID: string): number {
    if (this.ratings != undefined) {
      for (var i = 0; i < this.ratings.length; i++) {
        if (this.ratings[i].imdbID == imdbID) {
          return i;
        }
      }
    }
    return -1;
  }
}

