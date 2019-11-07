import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
// import { constants } from 'src/app/appconstants';

@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    // Constants
  ]
})
export class MovieModule { }
