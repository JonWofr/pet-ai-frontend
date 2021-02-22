import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HeroHomeComponent } from "./components/hero-home/hero-home.component";
import { InspirationComponent } from "./components/inspiration/inspiration.component";
import { OfferComponent } from "./components/offer/offer.component";



const declarations = [
    HeroHomeComponent,
    InspirationComponent,
    OfferComponent
]

@NgModule({
    declarations: declarations,
    imports: [SharedModule],
    exports: declarations,
  })

export class HomeModule { }