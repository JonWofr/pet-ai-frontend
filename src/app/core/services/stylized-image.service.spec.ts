import { TestBed } from '@angular/core/testing';

import { StylizedImageService } from './stylized-image.service';

describe('StylizedImageService', () => {
  let service: StylizedImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StylizedImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
