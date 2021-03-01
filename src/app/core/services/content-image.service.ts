import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentImage } from '../models/content-image.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ContentImageService extends DataService<ContentImage> {
  constructor(http: HttpClient) {
    super(
      'http://localhost:5001/petai-bdd53/europe-west3/api/content-images',
      http
    );
  }
}
