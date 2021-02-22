import { animate, style, transition, trigger } from '@angular/animations';
import { Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
export class ImageStyleSliderComponent implements OnInit, AfterViewInit {

  constructor() { }

  isHorizontalMode = true;

  imgSwiper : Swiper
  styleSwiper : Swiper

  imageActive = true
  styleSelected = false
  
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.isHorizontalMode = this.imgSwiper.params.direction == 'horizontal'
  }

  @ViewChild('imgSwiper') set _imgSwiper(_: ElementRef) {
    this.imgSwiper = new Swiper('.img-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      mousewheel: true,
      slidesOffsetAfter: 16,
      breakpoints: {
        1000: {
          direction: 'vertical',
        }
      }
    });
    this.isHorizontalMode = this.imgSwiper.params.direction == 'horizontal'
  }

  @ViewChild('styleSwiper') set _styleSwiper(_: ElementRef) {
    this.styleSwiper = new Swiper('.style-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      mousewheel: true,
      slidesOffsetAfter: 16,
      breakpoints: {
        1000: {
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
        }),
      }
    });
    this.isHorizontalMode = this.styleSwiper.params.direction == 'horizontal'
  }

  toggleImage(shouldShowImages: boolean) {
    this.imageActive = shouldShowImages
  }
}
