import { TestBed } from '@angular/core/testing';

import { MatrixFillerService } from './matrix-filler.service';

describe('MatrixFillerService', () => {
  let service: MatrixFillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatrixFillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
