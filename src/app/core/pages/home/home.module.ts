import { NgModule } from "@angular/core";
import { HeroHomeComponent } from "./components/hero-home/hero-home.component";



const declarations = [
    HeroHomeComponent
]

@NgModule({
    declarations: declarations,
    exports: declarations,
  })

export class HomeModule { }