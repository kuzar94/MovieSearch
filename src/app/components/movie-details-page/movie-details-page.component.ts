import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit {
  private movieData: Movie;
  private ratingColor: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.movieData = this.router.getCurrentNavigation().extras.state.movieData;
    this.ratingColor = this.router.getCurrentNavigation().extras.state.ratingColor;
  }

  ngOnInit(): void {
    this.movieData.show.summary = this.movieData.show.summary.replace(/<\/?[^>]+(>|$)/g, '');
  }

  handleBackButtonClick(): void {
    this.router.navigate(['movie-search-engine']);
  }
}
