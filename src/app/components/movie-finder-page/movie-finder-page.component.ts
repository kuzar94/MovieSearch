import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MovieService } from '../../shared/service/data/movie.service';
import { Movie } from '../../shared/models/movie';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-finder-page',
  styleUrls: ['./movie-finder-page.component.scss'],
  templateUrl: './movie-finder-page.component.html',
})
export class MovieFinderPageComponent implements OnInit {
  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;
  countryForm: FormGroup;

  private _movies: Movie[];
  private _searchInputValue: string;
  private _currentGenres: string[];
  private _genresFilter: string[];
  private _filteredMovieList: Movie[];
  private _status: string;

  constructor(private movieService: MovieService,
              private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.searchInputValue = null;
    this.status = 'Any';
    this.genresFilter = [];
    this.movies = [];
    this.filteredMovieList = [];
    this.countryForm = this.formBuilder.group({
      countryControl: ['Any']
    });
  }

  get status(): string {
    return this._status;
  }

  set status(status: string) {
    this._status = status;
  }

  get filteredMovieList(): Movie[] {
    return this._filteredMovieList;
  }

  set filteredMovieList(filteredMovieList: Movie[]) {
    this._filteredMovieList = filteredMovieList;
  }

  get genresFilter(): string[] {
    return this._genresFilter;
  }

  set genresFilter(genresFilter: string[]) {
    this._genresFilter = genresFilter;
  }

  get currentGenres(): string[] {
    return this._currentGenres;
  }

  set currentGenres(currentGenres: string[]) {
    this._currentGenres = currentGenres;
  }

  get searchInputValue(): string {
    return this._searchInputValue;
  }

  set searchInputValue(searchInputValue: string) {
    this._searchInputValue = searchInputValue;
  }

  get movies(): Movie[] {
    return this._movies;
  }

  set movies(movies: Movie[]) {
    this._movies = movies;
  }

  handleMovieSearch(): void {
    this.getSearchedMovies();
  }

  handleCheckboxChange(clickedGenre: string): void {
    if (this.genresFilter.includes(clickedGenre)) {
      this.genresFilter = this.genresFilter.filter(item => item !== clickedGenre);
    } else {
      this.genresFilter.push(clickedGenre);
    }
    this.filterMovies();
  }

  handleSelectChange(status: string): void {
    this.status = status;
    this.filterMovies();
  }

  private getSearchedMovies(): void {
    this.movieService.getSearchedMovies$(this.searchInputValue).subscribe(
      (dataMovies) => {
        this.movies = dataMovies;
        this.getCurrentGenres();
        this.unCheckCheckBoxes();
        this.selectDefaultStatus();
        this.filterMovies();
      });
  }

  private getCurrentGenres(): void {
    let sortedCurrentGenres = [];
    this.movies.forEach(element => {
      sortedCurrentGenres.push(element.show.genres.forEach(abc => {
        sortedCurrentGenres.push(abc);
      }));
    });
    sortedCurrentGenres = sortedCurrentGenres.filter(e => e);
    this.currentGenres = [...new Set(sortedCurrentGenres)];
  }

  private filterMovies(): void {
    if (!this.movies.length) {
      return;
    }
    this.filteredMovieList = this.movies;
    this.filterMoviesByGenre();
    this.filteredMoviesByStatus();
  }

  private filterMoviesByGenre(): void {
    if (this.genresFilter.length === 0) {
      this.filteredMovieList = this.movies;
    } else {
      this.genresFilter.forEach(item => {
        this.filteredMovieList = this.filteredMovieList.filter(itemFilter => itemFilter.show.genres.includes(item));
      });
    }
  }

  private filteredMoviesByStatus(): void {
    if (this.status !== 'Any') {
      this.filteredMovieList = this.filteredMovieList.filter(itemFilter => itemFilter.show.status === this.status);
    }
  }

  private unCheckCheckBoxes(): void {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.genresFilter = [];
  }

  private selectDefaultStatus(): void {
    this.countryForm = this.formBuilder.group({
      countryControl: ['Any']
    });
    this.status = 'Any';
  }
}
