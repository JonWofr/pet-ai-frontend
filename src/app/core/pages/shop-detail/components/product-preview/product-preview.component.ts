import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Swiper
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

@Component({
  selector: 'shop-detail-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  galleryThumbsSwiper: Swiper
  galleryTopSwiper: Swiper

  swiper: Swiper

  onSwiper(swiper: Swiper) {
    this.galleryTopSwiper.thumbs.swiper = swiper
  }

  onSwiperTop(swiper: Swiper) {
    this.galleryTopSwiper = swiper
    console.log(swiper.thumbs)
  }

  onSlideChange() {
    console.log('slide change');
  }

}
