import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Swiper,
  Controller
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs, Controller]);

@Component({
  selector: 'shop-detail-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  thumbSwiper: Swiper
  galleryTopSwiper: Swiper

  onSwiperTop(swiper: Swiper) {
    this.galleryTopSwiper = swiper
  }

  onSwiperThumb(swiper: Swiper) {
    this.thumbSwiper = swiper
    this.galleryTopSwiper.thumbs.swiper = swiper
  }

  onSlideClick(event: any) {
    if(event.clickedIndex !== undefined) {
      this.galleryTopSwiper.slideTo(event.clickedIndex)
    }
  }

  slideToNext(right: boolean) {
    if(right) {
      this.galleryTopSwiper.slideNext()
    } else {
    this.galleryTopSwiper.slidePrev()
    }
    
    
  }

}
