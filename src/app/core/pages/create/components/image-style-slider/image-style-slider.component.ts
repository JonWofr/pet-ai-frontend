import { animate, style, transition, trigger } from '@angular/animations';
import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
  Swiper,
  Mousewheel
} from 'swiper/core';
import { SwiperEvents } from 'swiper/types';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs, Controller, Mousewheel]);

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

  isHorizontalMode = true;
  
  ngOnInit(): void {
    var imgSwiper = new Swiper('.img-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      mousewheel: true,
      breakpoints: {
        1000: {
          direction: 'vertical',
        }
      }
    });
    this.isHorizontalMode = imgSwiper.params.direction == 'horizontal'


    var styleSwiper = new Swiper('.style-swiper', {
      slidesPerView: 4,
      spaceBetween: 16,
      freeMode: true,
      mousewheel: true,
      breakpoints: {
        // when window width is >= 320px
        330: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 16
        },

        1000: {
          slidesPerView: 'auto',
          direction: 'vertical',
          slidesPerColumnFill: 'row',
          spaceBetween:32,
          slidesPerColumn: 2,
          
        }
      },
      on: {
        click: ((swiper: Swiper) => {
          console.log(swiper.clickedIndex)
          this.styleSelected = true
          styleSwiper.update()
        }),
        init: ((swiper: Swiper) => {
          setTimeout(()=> {
            swiper.update()
          }, 2000)
        })
      }
    });
  }

  

  imageActive = true

  styleSelected = false

  toggleImage(shouldShowImages: boolean) {
    this.imageActive = shouldShowImages
  }
}
