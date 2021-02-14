import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HeroHomeComponent } from "./components/hero-home/hero-home.component";
import { InspirationComponent } from "./components/inspiration/inspiration.component";



const declarations = [
    HeroHomeComponent,
    InspirationComponent
]

@NgModule({
    declarations: declarations,
    imports: [SharedModule],
    exports: declarations,
  })

export class HomeModule { }