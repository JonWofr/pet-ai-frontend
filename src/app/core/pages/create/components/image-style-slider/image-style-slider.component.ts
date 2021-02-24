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

  @ViewChild('imgSwiper') set _imgSwiper(el: ElementRef) {
    console.log('imgSwiper init', el)
    if(el) {
      this.imgSwiper = new Swiper('.img-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      mousewheel: true,
      slidesOffsetAfter: 16,
      on: {
        afterInit: (() => {
          setTimeout(() => {
            this.imgSwiper.update()
          })
        })
      },
      breakpoints: {
        1000: {
          direction: 'vertical',
        }
      }
    });
    this.isHorizontalMode = this.imgSwiper.params.direction == 'horizontal'
    }
  }

  @ViewChild('styleSwiper') set _styleSwiper(el: ElementRef) {
    if(el) {
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
          afterInit: (() => {
            setTimeout(() => {
              this.styleSwiper.update()
            })
          })
        }
      });
      this.isHorizontalMode = this.styleSwiper.params.direction == 'horizontal'
    }
  }

  toggleImage(shouldShowImages: boolean) {
    this.imageActive = shouldShowImages
  }
}
