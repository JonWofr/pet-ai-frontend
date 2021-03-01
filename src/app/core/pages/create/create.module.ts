import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { ImageStyleSliderComponent } from './components/image-style-slider/image-style-slider.component';
import { UploadModalComponent } from './components/upload-modal/upload-modal.component';

const declarations = [ImageStyleSliderComponent, UploadModalComponent];

@NgModule({
  declarations: declarations,
  imports: [SharedModule, SwiperModule],
  exports: declarations,
})
export class CreateModule {}
