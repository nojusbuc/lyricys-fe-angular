import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricsEditor } from './lyrics-editor';

describe('LyricsEditor', () => {
  let component: LyricsEditor;
  let fixture: ComponentFixture<LyricsEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyricsEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyricsEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
