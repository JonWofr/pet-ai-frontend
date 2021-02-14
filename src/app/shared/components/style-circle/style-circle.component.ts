import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-style-circle',
  templateUrl: './style-circle.component.html',
  styleUrls: ['./style-circle.component.scss']
})
export class StyleCircleComponent implements OnInit {

  @Input() isSelected = false

  constructor() { }

  ngOnInit(): void {
  }

}
