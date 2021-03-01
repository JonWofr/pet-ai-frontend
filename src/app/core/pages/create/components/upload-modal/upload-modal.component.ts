import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'create-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent implements OnInit {
  @Output() uploadedImage = new EventEmitter<boolean>();

  constructor() {}

  path?: any;

  ngOnInit(): void {}

  onChange(event: any) {
    console.log(event.target.files[0]);

    let imageFile = event.target.files[0];

    let reader = new FileReader();
    reader.addEventListener('loadend', (progress) => {
      console.log(progress.target?.result);
      this.path = progress.target?.result;
    });

    reader.readAsDataURL(imageFile);

    // console.log(readFile(event.target.files[0]));
    this.path = event.target.result;
    this.uploadedImage.emit(true);
  }
}
