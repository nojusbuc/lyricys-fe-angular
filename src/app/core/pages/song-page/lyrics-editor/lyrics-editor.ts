import { Component, model } from '@angular/core';
import { Song } from '../../../types/interfaces/song';
import { SongVersion } from '../../../types/interfaces/song-version';

@Component({
  selector: 'app-lyrics-editor',
  imports: [],
  templateUrl: './lyrics-editor.html',
  styleUrl: './lyrics-editor.scss',
})
export class LyricsEditor {
  song = model.required<Song>();
  version = model.required<SongVersion>();
}
