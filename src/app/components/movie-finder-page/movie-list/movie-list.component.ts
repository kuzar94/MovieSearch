import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../../shared/models/movie';
import { Show } from '../../../shared/models/show';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  styleUrls: ['./movie-list.component.scss'],
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Output() deleteTaskButtonClicked = new EventEmitter<string>();
  @Output() taskChanged = new EventEmitter<Show>();
  private _filteredMovieList: Movie[];

  constructor(private router: Router) {
  }

  get filteredMovieList(): Movie[] {
    return this._filteredMovieList;
  }

  @Input() set filteredMovieList(movies: Movie[]) {
    this._filteredMovieList = movies;
  }

  getColor(averageRatingValue: number): string {
    const roundedPercentage = Math.floor(averageRatingValue) * 10;
    let r = 0;
    let g = 0;
    if (!averageRatingValue) {
      return 'none';
    }
    if (roundedPercentage < 50) {
      r = 255;
      g = Math.round(5.1 * roundedPercentage);
    } else {
      g = 255;
      r = Math.round(500 - 5.10 * roundedPercentage);
    }
    const h = r * 0x10000 + g * 0x100;
    return '#' + ('000000' + h.toString(16)).slice(-6);
  }

  handleMovieRowClick(movie: Movie): void {
    this.router.navigate(['movie-details'],
      {
        state: {
          movieData: movie,
          ratingColor: this.getColor(movie.show.rating.average),
        }
      });
  }

}

