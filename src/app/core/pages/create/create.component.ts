import { Component, OnInit } from '@angular/core';
import { slideInOutBottom } from 'src/app/shared/animations';
import { ContentImage } from '../../models/content-image.model';
import { StyleImage } from '../../models/style-image.model';
import { ContentImageService } from '../../services/content-image.service';
import { StyleImageService } from '../../services/style-image.service';
import { StylizedImageService } from '../../services/stylized-image.service';

@Component({
  selector: 'page-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  animations: [slideInOutBottom],
})
export class CreateComponent implements OnInit {
  constructor(
    private contentImageService: ContentImageService,
    private styleImageService: StyleImageService,
    private stylizedImageService: StylizedImageService
  ) {}

  imageSrc = '/assets/icons/loading-anim.svg';
  showUploadModal = false;

  contentImages: ContentImage[];
  selectedContentImageIndex = 0;

  styleImages: StyleImage[];
  selectedStyleImageIndex: number;

  isUploadingImage = false;
  isApplyingStyle = false;

  ngOnInit(): void {
    this.contentImageService.getAll().subscribe((response) => {
      this.contentImages = response;
      this.imageSrc = response[0].image.publicUrl;
    });
    this.styleImageService.getAll().subscribe((response) => {
      this.styleImages = response;
    });
  }

  imageSelectionChanged(index: number) {
    this.imageSrc = this.contentImages[index].image.publicUrl;
    this.selectedContentImageIndex = index;
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

  applyStyle(index: number) {
    if (index !== undefined && !this.isApplyingStyle) {
      this.selectedStyleImageIndex = index;
      const contentImageId = this.contentImages[this.selectedContentImageIndex]
        .id;
      const styleImageId = this.styleImages[index].id;
      const name = this.contentImages[this.selectedContentImageIndex].name;

      if (
        contentImageId !== undefined &&
        styleImageId !== undefined &&
        name !== undefined
      ) {
        const resource = {
          contentImageId: contentImageId,
          styleImageId: styleImageId,
          name: name,
        };
        this.isApplyingStyle = true;
        this.stylizedImageService.createJson(resource).subscribe((response) => {
          this.imageSrc = response.image.publicUrl;
          this.isApplyingStyle = false;
        });
      }
    }
  }
}
