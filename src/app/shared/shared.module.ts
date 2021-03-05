import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { StyleCircleComponent } from './components/style-circle/style-circle.component';
import { ProductFlowComponent } from './components/product-flow/product-flow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HeadlineComponent } from './components/headline/headline.component';
import { PhotoGuideComponent } from './components/photo-guide/photo-guide.component';

const declarations = [
  ProductBoxComponent,
  StyleCircleComponent,
  ProductFlowComponent,
  HeadlineComponent,
  PhotoGuideComponent,
];

@NgModule({
  declarations: declarations,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, AppRoutingModule],
  exports: [declarations, CommonModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
