import { TestBed } from '@angular/core/testing';

import { PasantiasService } from './pasantias.service';

describe('PasantiasService', () => {
  let service: PasantiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasantiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
