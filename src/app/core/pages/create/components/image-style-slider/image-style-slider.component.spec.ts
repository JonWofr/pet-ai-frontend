import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStyleSliderComponent } from './image-style-slider.component';

describe('ImageStyleSliderComponent', () => {
  let component: ImageStyleSliderComponent;
  let fixture: ComponentFixture<ImageStyleSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageStyleSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageStyleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
