import { TestBed } from '@angular/core/testing';

import { SongStore } from './song-store';

describe('SongStore', () => {
  let service: SongStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
