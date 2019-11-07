import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {apiKey} from 'src/app/app.constants.private';
import { AppMetadataService } from './app-metadata.service';
@Injectable({
  providedIn: 'root'
})
export class TmdbClientService {
  constructor(private httpconn: HttpClient, private appData: AppMetadataService  ) {
  }

  getMovies() {
    const apiKey = this.appData.getApiKey();
   // return this.httpconn.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    return apiKey;
  }
}
