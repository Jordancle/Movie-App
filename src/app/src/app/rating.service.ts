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

  constructor(
  ) {

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

  saveRating(title: string ,imdbID: string, userRating: number, plot: string, posterUrl: string) {
    let rating: Rating = new Rating;
    rating.title = title;
    rating.imdbID = imdbID;
    rating.userRating = userRating;
    rating.plot = plot;
    rating.posterUrl = posterUrl;
    let i: number;
    if ((i = this.findRatingIndex(imdbID)) != -1) {
      this.ratings.splice(i,1);
      this.ratings.push(rating);
    } else {
      this.ratings.push(rating);
    }
    for (var j = this.ratings.length-1; j > 0; j--) {
      if (this.ratings[j].userRating >= this.ratings[j-1].userRating) {
        var temp = this.ratings[j-1];
        this.ratings[j-1] = this.ratings[j];
        this.ratings[j] = temp;
      }
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

