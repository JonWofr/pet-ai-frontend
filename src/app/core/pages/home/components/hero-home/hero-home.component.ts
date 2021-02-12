import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-hero',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.scss']
})
export class HeroHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.setHeroHeight()
  }

  setHeroHeight() {
    const navHeight = document.getElementsByClassName('nav')[0].clientHeight
    document.getElementById('hero-wrapper')!.style.height = String(window.innerHeight - navHeight) + 'px'
  }

}
