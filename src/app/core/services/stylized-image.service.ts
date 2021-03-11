import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { StylizedImage } from '../models/stylized-image.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class StylizedImageService extends DataService<StylizedImage> {
  constructor(http: HttpClient, auth: AngularFireAuth) {
    super(`${environment.backendApi}/stylized-images`, http, auth);
  }
}
