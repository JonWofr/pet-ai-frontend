import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/de';
registerLocaleData(localeFr, 'de');

@Component({
  selector: 'shop-detail-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.scss'],
})
export class ProductSelectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  productSelectionForm = new FormGroup({
    material: new FormControl('canvas'),
    size: new FormControl('30x30'),
    quantity: new FormControl(1, Validators.min(1)),
  });

  addQuantity() {
    this.productSelectionForm.controls['quantity'].setValue(
      (this.productSelectionForm.value.quantity += 1)
    );
  }

  subtractQuantity() {
    if (this.productSelectionForm.value.quantity > 1) {
      this.productSelectionForm.controls['quantity'].setValue(
        (this.productSelectionForm.value.quantity -= 1)
      );
    }
  }
}
