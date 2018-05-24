import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { Rating } from './rating';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin as observableForkJoin, Subject, from } from 'rxjs';
import { catchError, map, tap, mergeMap, switchMap, merge } from 'rxjs/operators';

import { RatingService } from './rating.service';
import { observable } from 'rxjs/internal/symbol/observable';
// import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  // searchKey: string;
  // pageNum: number;
  totalResults: number = 0;
  loaded: number = 0;
  loadedSubject = new Subject();

  totalResultsSubject = new Subject();
  pageChangedSubject = new Subject();

  goodResults: boolean;

  constructor(
    private http: HttpClient,
    private ratingService: RatingService
  ) { }

  // setPage(num: number) {
  //   this.pageNum = num;
  //   this.pageChangedSubject.next(num);
  // }

  // Once API returns totalResults, this subject
  // emits the number of results
  setTotalResults(totalResults: number) {
    this.totalResults = totalResults;
    this.totalResultsSubject.next(this.totalResults);
  }

  // Method to store search key so that results will not dissapear
  // when the page changes
  // saveKey(searchKey: string) {
  //   this.searchKey = searchKey;
  // }

  // Return the key back to the component
  // getKey(): string {
  //   return this.searchKey;
  // }

  getMovies(searchKey: string, page: string): Observable<Movie[]> {
    this.loaded = 0;
    return this.http.get<Movie[]>("http://www.omdbapi.com/?apikey=91c3e55a&s=" + searchKey + "&page=" + page)
      .pipe(
      // use switch map to cancel old request
      switchMap((response: any) => {
        
        // Checks if server returned a good response
        let isSuccess: boolean = response.Response === "True";
        this.goodResults = isSuccess;
        if (isSuccess) {
          let jsonMovies: any[] = response.Search;
          this.setTotalResults(response.totalResults);

          let movieIds: string[] = jsonMovies.map(jsonMovie => {
            return jsonMovie.imdbID as string;
          });

          let observables = movieIds.map(id => {
            return this.getMovie(id);
          });
          return observableForkJoin(observables);
        } else {
          this.setTotalResults(0);
          let foo = from<Movie[]>([]);
          // let foo = new Observable<Movie[]>();
          return foo;
        }
      }
      ));
  }

  // Uses movie id from url
  getMovie(id: string): Observable<Movie> {
    // this url is used to search the API using the imdbID
    const url = "http://www.omdbapi.com/?apikey=91c3e55a&i=";
    return this.http.get<Movie>(url + id)
      .pipe(map((response: any) => {
        let movie = new Movie();
        // this prevents the mapping from occuring if the Response
        // from the json is False, meaning that there are no results.
        let isSuccess: boolean = response.Response === "True";
        if (isSuccess) {
          movie.title = response.Title;
          movie.imdbID = id;
          movie.released = response.Year;
          movie.runtime = response.Runtime;
          movie.genre = response.Genre;
          movie.metascore = response.Metascore;
          movie.imdbRating = response.imdbRating;
          movie.plot = response.Plot;
          movie.posterUrl = response.Poster;
          movie.userRating = this.ratingService.getRating(movie.imdbID);
          this.loaded++;
          this.loadedSubject.next(this.loaded);
          return movie;
        }
      })

      )
  }

  // I have no idea what this means right now
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

}

