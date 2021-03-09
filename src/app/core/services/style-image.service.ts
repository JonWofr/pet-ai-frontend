import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { StyleImage } from '../models/style-image.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class StyleImageService extends DataService<StyleImage> {
  constructor(http: HttpClient, auth: AngularFireAuth) {
    super(`${environment.backendApi}/style-images`, http, auth);
  }
}
