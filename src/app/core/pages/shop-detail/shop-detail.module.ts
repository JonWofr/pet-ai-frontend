import { NgModule } from "@angular/core";
import { from } from "rxjs";
import { SharedModule } from "src/app/shared/shared.module";
import { ProductPreviewComponent } from "./components/product-preview/product-preview.component";
import { SwiperModule } from 'swiper/angular';
import { ProductSelectionComponent } from "./components/product-selection/product-selection.component";
import { ProductInformationComponent } from "./components/product-information/product-information.component";

const declarations = [
    ProductPreviewComponent, ProductSelectionComponent, ProductInformationComponent
]

@NgModule({
    declarations: declarations,
    imports: [SharedModule, SwiperModule],
    exports: declarations,
  })

export class ShopDetailModule { }