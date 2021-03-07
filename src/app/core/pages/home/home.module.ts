import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';
import { OfferSummaryComponent } from './components/offer-summary/offer-summary.component';
const declarations = [
  HeroHomeComponent,
  InspirationComponent,
  OfferSummaryComponent,
];

@NgModule({
  declarations: declarations,
  imports: [SharedModule, AppRoutingModule],
  exports: declarations,
})
export class HomeModule {}
