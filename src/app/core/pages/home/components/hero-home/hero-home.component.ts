import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-hero',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss'],
})
export class HeroHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setHeroHeight();
    this.createObserver();
    setTimeout(() => {
      //this.isCallToActionSticky = true
    }, 2000);
  }

  setHeroHeight() {
    const navHeight = document.getElementsByClassName('nav')[0].clientHeight;
    document.getElementById('hero-wrapper')!.style.height =
      String(window.innerHeight - navHeight) + 'px';
  }

  isCallToActionSticky = false;

  createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          this.isCallToActionSticky = !entry.isIntersecting;
        });
      },
      options
    );
    document.querySelectorAll('.button-hero-flat').forEach((value) => {
      observer.observe(value);
    });
  }
}
