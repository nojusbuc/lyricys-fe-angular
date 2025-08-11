import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsListPage } from './songs-list-page';

describe('SongsListPage', () => {
  let component: SongsListPage;
  let fixture: ComponentFixture<SongsListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
