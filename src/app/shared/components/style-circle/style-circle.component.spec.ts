import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCircleComponent } from './style-circle.component';

describe('StyleCircleComponent', () => {
  let component: StyleCircleComponent;
  let fixture: ComponentFixture<StyleCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
