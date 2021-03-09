import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentImage } from '../models/content-image.model';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class ContentImageService extends DataService<ContentImage> {
  constructor(http: HttpClient, auth: AngularFireAuth) {
    super(`${environment.backendApi}/content-images`, http, auth);
  }
}
