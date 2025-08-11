import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongHeader } from './song-header';

describe('SongHeader', () => {
  let component: SongHeader;
  let fixture: ComponentFixture<SongHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
