import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ContentImage } from 'src/app/core/models/content-image.model';
import { ContentImageService } from 'src/app/core/services/content-image.service';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
  Swiper,
  Mousewheel,
} from 'swiper/core';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
  Mousewheel,
]);

@Component({
  selector: 'create-image-style-slider',
  templateUrl: './image-style-slider.component.html',
  styleUrls: ['./image-style-slider.component.scss'],
})
export class ImageStyleSliderComponent implements OnInit {
  constructor(
    private route: Router,
    private contentImageService: ContentImageService
  ) {}

  @Output() addImageBtnClicked = new EventEmitter<void>();

  openUploadModal() {
    this.addImageBtnClicked.emit();
  }

  isHorizontalMode = true;

  imgSwiper: Swiper;
  styleSwiper: Swiper;

  imageActive = true;
  styleSelected = false;

  contentImages: ContentImage[] = [];

  ngOnInit(): void {
    this.contentImageService.getAll().subscribe((response) => {
      this.contentImages = response;
    });
  }

  @ViewChild('swiperSlide') set swiperSlide(el: ElementRef) {}

  @ViewChild('imgSwiper') set _imgSwiper(el: ElementRef) {
    if (el) {
      this.imgSwiper = new Swiper('.img-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
        mousewheel: true,
        slidesOffsetAfter: 16,
        on: {
          afterInit: () => {
            setTimeout(() => {
              this.imgSwiper.update();
            });
          },
        },
        breakpoints: {
          1000: {
            direction: 'vertical',
          },
        },
      });
      this.isHorizontalMode = this.imgSwiper.params.direction == 'horizontal';
    }
  }

  @ViewChild('styleSwiper') set _styleSwiper(el: ElementRef) {
    if (el) {
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
            spaceBetween: 32,
            slidesPerColumn: 2,
          },
        },
        on: {
          click: (swiper: Swiper) => {
            console.log(swiper.clickedIndex);
            this.styleSelected = true;
          },
          afterInit: () => {
            setTimeout(() => {
              this.styleSwiper.update();
            });
          },
        },
      });
      this.isHorizontalMode = this.styleSwiper.params.direction == 'horizontal';
    }
  }

  toggleImage(shouldShowImages: boolean) {
    this.imageActive = shouldShowImages;
  }

  finished() {
    if (this.styleSelected) {
      this.route.navigate(['shop/1']);
    } else {
      alert('please select a style first');
    }
  }
}
