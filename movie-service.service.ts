import { Injectable } from '@angular/core';

import { Movie } from './movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin as observableForkJoin } from 'rxjs';
import { catchError, map, tap, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  searchKey: string;

  constructor(
    private http: HttpClient
  ) { }

  // Method to store search key so that results will not dissapear
  // when the page changes
  saveKey(searchKey: string) {
    this.searchKey = searchKey;
  }

  // Return the key back to the component
  getKey(): string {
    return this.searchKey;
  }

  getMovies(searchKey: string): Observable<Movie[]> {
    return this.http.get<Movie[]>("http://www.omdbapi.com/?apikey=91c3e55a&s=" + searchKey)
      .pipe(
      // catchError(this.handleError('getMovies', [])),
      mergeMap((response: any) => {
        
        // Checks if server returned a good response
        let isSuccess: boolean = response.Response === "True";
        if (isSuccess) {
          let jsonMovies: any[] = response.Search;


          let movieIds: string[] = jsonMovies.map(jsonMovie => {
            return jsonMovie.imdbID as string;
          });

          let observables = movieIds.map(id => {
            return this.getMovie(id);
          });

          return observableForkJoin(observables)

        } 
        // else {
        //   let movies: Movie[] = [];
        //   return movies as Observable<Observable<Movie[]>>;
        // }
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

