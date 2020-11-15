import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MovieFinderPageComponent } from './components/movie-finder-page/movie-finder-page.component';
import { MovieListComponent } from './components/movie-finder-page/movie-list/movie-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsPageComponent } from './components/movie-details-page/movie-details-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    MovieFinderPageComponent,
    MovieListComponent,
    MovieDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'movie-search-engine',
        pathMatch: 'full',
      },
      {
        path: 'movie-search-engine',
        component: MovieFinderPageComponent
      },
      {
        path: 'movie-details',
        component: MovieDetailsPageComponent,
        data: {some_data: 'some value'}
      },

    ])
  ],
  providers: [],
})
export class AppModule {
}
