import { TestBed } from '@angular/core/testing';

import { Metas } from './metas';

describe('Metas', () => {
  let service: Metas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Metas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
