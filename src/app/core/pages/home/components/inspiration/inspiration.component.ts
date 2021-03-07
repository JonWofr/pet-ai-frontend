import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss'],
})
export class InspirationComponent implements OnInit {
  constructor() {}

  columns: number[] = [];

  ngOnInit(): void {
    const inspirationElement = document.getElementById(
      'inspiration'
    ) as HTMLElement;
    const columns = window
      .getComputedStyle(inspirationElement)
      .gridTemplateColumns.split(' ').length;
    this.columns = this.createMockArray(columns);
  }

  createMockArray(length: number) {
    let mockArray = [];
    for (let i = 0; i < length * 2; i++) {
      mockArray.push(i);
    }
    return mockArray;
  }
}
