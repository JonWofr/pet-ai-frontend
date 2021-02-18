import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CreateComponent } from "./create/create.component";
import { CreateModule } from "./create/create.module";
import { HomeComponent } from "./home/home.component";
import { HomeModule } from "./home/home.module";
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { ShopDetailComponent } from "./shop-detail/shop-detail.component";
import { ShopDetailModule } from "./shop-detail/shop-detail.module";
import { ShopComponent } from "./shop/shop.component";

const declarations = [
  HomeComponent,
  CreateComponent,
  ShopComponent,
  ShopDetailComponent,
  HowItWorksComponent
]

@NgModule({
    declarations: declarations,
    imports: [HomeModule, SharedModule, ShopDetailModule, CreateModule],
    exports: declarations,
  })

export class PageModule { }