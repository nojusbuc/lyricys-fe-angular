import { Component, effect, inject, model } from '@angular/core';
import { Song } from '../../../types/interfaces/song';
import { SongVersion } from '../../../types/interfaces/song-version';
import { LocalStorage } from '../../../services/local-storage';
import { DatePipe } from '@angular/common';
import { SongService } from '../../../services/song-service';
import { SongStore } from '../../../services/song-store/song-store';

@Component({
  selector: 'app-lyrics-editor',
  imports: [],
  templateUrl: './lyrics-editor.html',
  styleUrl: './lyrics-editor.scss',
})
export class LyricsEditor {
  song = model.required<Song>();
  version = model.required<SongVersion>();
  localStorageService = inject(LocalStorage);
  songStore = inject(SongStore);

  constructor() {
    effect(() => {
      this.localStorageService.updateSong(this.song());
      console.log('c');
    });
  }

  onLyricsBlur(versionId: string, event: Event) {
    const now = new Date() || DatePipe;
    const value = (event.target as HTMLTextAreaElement).value.trim();

    if (this.version().lyrics !== value) {
      const v: SongVersion = {
        ...this.version(),
        lastEditedAt: now,
        lyrics: value,
      };
      this.songStore.updateSongVersion(this.song().id, v);
    }
  }
}
