import { Component, OnInit } from '@angular/core';
import { slideInOutBottom } from 'src/app/shared/animations';
import { ContentImage } from '../../models/content-image.model';
import { StyleImage } from '../../models/style-image.model';
import { ContentImageService } from '../../services/content-image.service';
import { StyleImageService } from '../../services/style-image.service';

@Component({
  selector: 'page-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [slideInOutBottom],
})
export class CreateComponent implements OnInit {
  constructor(
    private contentImageService: ContentImageService,
    private styleImageService: StyleImageService
  ) {}

  imageSrc = '/assets/icons/loading-anim.svg';
  showUploadModal = false;

  contentImages: ContentImage[];
  styleImages: StyleImage[];

  isUploadingImage = false;

  ngOnInit(): void {
    this.contentImageService.getAll().subscribe((response) => {
      this.contentImages = response;
      this.imageSrc = response[0].image.publicUrl;
    });
    this.styleImageService.getAll().subscribe((response) => {
      this.styleImages = response;
      console.log(response);
    });
  }

  imageSelectionChanged(index: number) {
    this.imageSrc = this.contentImages[index].image.publicUrl;
  }

  openUploadModal() {
    this.showUploadModal = true;
  }

  uploadImage(imageFile: File | null) {
    this.showUploadModal = false;

    if (imageFile) {
      const resource = new FormData();
      resource.append('name', 'test');
      resource.append('contentImage', imageFile);

      this.isUploadingImage = true;

      this.contentImageService.createFormData(resource).subscribe(
        (response) => {
          this.contentImages.splice(0, 0, response);
          console.log('image uploaded and received');
          this.isUploadingImage = false;
        },
        (error) => {
          console.log(error);
          this.isUploadingImage = false;
        }
      );
    }
  }

  readFile(file: Blob) {
    //   let reader = new FileReader();
    //   reader.addEventListener('loadend', (progress) => {
    //     const image = progress.target?.result as string;
    //     this.uploadedImage.emit(image);
    // });
    //   reader.readAsDataURL(file);
  }
}
