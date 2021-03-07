import { Component, OnInit } from '@angular/core';
import { slideInOutRight, slideInOutLeft } from 'src/app/shared/animations';

@Component({
  selector: 'hiw-step-section',
  templateUrl: './step-section.component.html',
  styleUrls: ['./step-section.component.scss'],
  animations: [slideInOutRight, slideInOutLeft],
})
export class StepSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
