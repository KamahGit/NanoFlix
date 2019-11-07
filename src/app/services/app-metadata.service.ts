import { Injectable } from '@angular/core';
import { appData } from '../app.constants.private';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppMetadataService {
  constructor() {}
  getAppName() {
    return appData.appName;
  }
  getApiKey() {
    return appData.apiKey;
  }
  getPriColor() {
    return appData.primaryColor;
  }
  getAccentColor() {
    return appData.AccentColor;
  }
}
