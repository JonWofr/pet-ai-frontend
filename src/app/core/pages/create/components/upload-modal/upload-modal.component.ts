import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'create-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent implements OnInit {
  @Output() uploadedImage = new EventEmitter<File | null>();

  constructor() {}

  ngOnInit(): void {}

  dataProtectionChecked = false;

  onChange(event: any) {
    let imageFile = event.target.files[0];
    this.uploadedImage.emit(imageFile);
  }

  onClose() {
    this.uploadedImage.emit(null);
  }
}
