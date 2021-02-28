import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
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
    imports: [SharedModule, AppRoutingModule],
    exports: declarations,
  })

export class HomeModule { }