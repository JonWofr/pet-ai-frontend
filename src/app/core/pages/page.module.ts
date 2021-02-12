import { NgModule } from "@angular/core";
import { CreateComponent } from "./create/create.component";
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "./home/home.module";
import { OfferComponent } from "./offer/offer.component";
import { ShopDetailComponent } from "./shop-detail/shop-detail.component";
import { ShopComponent } from "./shop/shop.component";

const declarations = [
  HomeComponent,
  OfferComponent,
  CreateComponent,
  ShopComponent,
  ShopDetailComponent
]

@NgModule({
    declarations: declarations,
    imports: [HomeModule],
    exports: declarations,
  })

export class PageModule { }