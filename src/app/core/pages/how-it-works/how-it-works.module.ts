import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepSectionComponent } from 'src/app/core/pages/how-it-works/components/step-section/step-section.component';

const declarations = [StepSectionComponent];

@NgModule({
  declarations: declarations,
  imports: [SharedModule],
  exports: declarations,
})
export class HowItWorksModule {}
