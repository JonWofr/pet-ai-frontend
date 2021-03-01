import { Component, OnInit } from '@angular/core';
import { ContentImageService } from '../../services/content-image.service';

@Component({
  selector: 'page-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private contentImageService: ContentImageService) {}

  imageSrc = '';
  showUploadModal = true;

  ngOnInit(): void {}

  openUploadModal() {
    console.log('open upload modal');
  }

  uploadImage(image: boolean) {
    console.log(image);
  }
}
