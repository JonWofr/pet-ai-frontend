import { TestBed } from '@angular/core/testing';

import { StyleImageService } from './style-image.service';

describe('StyleImageService', () => {
  let service: StyleImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
