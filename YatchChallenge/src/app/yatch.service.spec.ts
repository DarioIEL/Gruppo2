import { TestBed } from '@angular/core/testing';

import { YatchService } from './yatch.service';

describe('YatchService', () => {
  let service: YatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
