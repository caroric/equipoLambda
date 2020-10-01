import { TestBed } from '@angular/core/testing';

import { MockAlumnosService } from './mock-alumnos.service';

describe('MockAlumnosService', () => {
  let service: MockAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
