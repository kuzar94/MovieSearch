import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly URL = 'http://api.tvmaze.com/';

  constructor(private http: HttpClient) {
  }

  getSearchedMovies$(movieSearchValue: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.URL}search/shows?q=${movieSearchValue}`);
  }
}
