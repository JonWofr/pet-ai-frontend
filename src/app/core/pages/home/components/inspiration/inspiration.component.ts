import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})
export class InspirationComponent implements OnInit {

  constructor() { }

  columns = 4

  ngOnInit(): void {
    const inspiration = (document.getElementById('inspiration') as HTMLElement)
    this.columns = window.getComputedStyle(inspiration).gridTemplateColumns.split(' ').length
  }

}
