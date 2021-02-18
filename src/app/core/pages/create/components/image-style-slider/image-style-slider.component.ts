import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
  Swiper
} from 'swiper/core';
import { SwiperEvents } from 'swiper/types';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs, Controller]);

@Component({
  selector: 'create-image-style-slider',
  templateUrl: './image-style-slider.component.html',
  styleUrls: ['./image-style-slider.component.scss'],
  animations: [
    trigger(
      'enterAnimationRight', 
      [
        transition(
          ':enter', 
          [
            style({ transform: 'translateX(100%)' }),
            animate('0.3s ease-out', 
                    style({ transform: 'translateX(0)' }))
          ]
        )
      ]
    ),
  ]
})
export class ImageStyleSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageActive = true

  styleSelected = false

  toggleImage(shouldShowImages: boolean) {
    this.imageActive = shouldShowImages
  }

  selectedStyle(swiper: Swiper) {
    console.log(swiper.clickedIndex)
    this.styleSelected = true
  }
}
