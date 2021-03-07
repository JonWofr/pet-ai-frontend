import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Swiper,
  Mousewheel,
  Autoplay,
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, A11y, Mousewheel, Autoplay]);
@Component({
  selector: 'home-offer-summary',
  templateUrl: './offer-summary.component.html',
  styleUrls: ['./offer-summary.component.scss'],
})
export class OfferSummaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let swiper = new Swiper('.physical-product-info-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 5000,
      },
      grabCursor: true,
    });
  }
}
