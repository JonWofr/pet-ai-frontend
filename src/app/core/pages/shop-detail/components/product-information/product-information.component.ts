import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'shop-detail-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pagination = Pagination
  selected = Pagination.description

  changeSelection(page: Pagination) {
    this.selected = page
  }

}

enum Pagination {
  description,
  shipping,
  whyUs
}