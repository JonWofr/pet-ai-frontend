import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SwiperModule } from "swiper/angular";
import { ImageStyleSliderComponent } from "./components/image-style-slider/image-style-slider.component";




const declarations = [
    ImageStyleSliderComponent
]

@NgModule({
    declarations: declarations,
    imports: [SharedModule, SwiperModule],
    exports: declarations,
  })

export class CreateModule { }