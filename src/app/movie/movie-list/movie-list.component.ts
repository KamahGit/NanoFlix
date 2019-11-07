import { Component, OnInit } from '@angular/core';
import { TmdbClientService } from 'src/app/services/tmdb-client.service';
// import { appName } from 'src/app/app.constants.private';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  results: {};
  key: any;
  // TODO: inject service for this
  // appName = appName;
  constructor(private http: TmdbClientService) { }

  ngOnInit() {
  //  this.http.getMovies().subscribe(data => {
  //   this.results = data;
  //   console.log(this.results);
  //  });
  this.key = this.http.getMovies();
  console.log(this.http.getMovies());

  }

}
