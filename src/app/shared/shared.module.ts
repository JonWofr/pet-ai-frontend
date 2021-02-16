import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { ProductBoxComponent } from "./components/product-box/product-box.component";
import { StyleCircleComponent } from "./components/style-circle/style-circle.component";
import { ProductFlowComponent } from "./components/product-flow/product-flow.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";

const declarations = [
    ProductBoxComponent,
    StyleCircleComponent,
    ProductFlowComponent,
]

@NgModule({
    declarations: declarations,
    imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
    exports: [declarations, CommonModule, ReactiveFormsModule],
  })

export class SharedModule { }