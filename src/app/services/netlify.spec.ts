import { TestBed } from '@angular/core/testing';

import { Netlify } from './netlify';

describe('Netlify', () => {
  let service: Netlify;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Netlify);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
