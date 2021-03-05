import { Component, Input, OnInit } from '@angular/core';
import { StyleImage } from 'src/app/core/models/style-image.model';

@Component({
  selector: 'shared-style-circle',
  templateUrl: './style-circle.component.html',
  styleUrls: ['./style-circle.component.scss'],
})
export class StyleCircleComponent implements OnInit {
  @Input() isSelected = false;
  @Input() styleImage: StyleImage;

  @Input() verticalLayout = false;

  constructor() {}

  ngOnInit(): void {}
}
