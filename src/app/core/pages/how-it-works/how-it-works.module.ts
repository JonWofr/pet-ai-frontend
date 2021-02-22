import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { StepSectionComponent } from "src/app/core/pages/how-it-works/components/step-section/step-section.component"
import { PhotoGuideComponent } from "./components/photo-guide/photo-guide.component";



const declarations = [
  StepSectionComponent, PhotoGuideComponent
]

@NgModule({
    declarations: declarations,
    imports: [SharedModule],
    exports: declarations,
  })

export class HowItWorksModule { }