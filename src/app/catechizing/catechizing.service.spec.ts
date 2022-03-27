import { TestBed } from '@angular/core/testing';

import { CatechizingService } from './catechizing.service';

describe('CatechizingService', () => {
  let service: CatechizingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatechizingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
