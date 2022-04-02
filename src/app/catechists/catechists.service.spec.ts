import { TestBed } from '@angular/core/testing';

import { CatechistsService } from './catechists.service';

describe('CatechistsService', () => {
  let service: CatechistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatechistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
