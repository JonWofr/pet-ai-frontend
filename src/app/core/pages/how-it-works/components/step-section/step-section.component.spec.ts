import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSectionComponent } from './step-section.component';

describe('StepSectionComponent', () => {
  let component: StepSectionComponent;
  let fixture: ComponentFixture<StepSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
