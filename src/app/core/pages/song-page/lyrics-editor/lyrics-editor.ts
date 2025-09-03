import { Component, effect, inject, model } from '@angular/core';
import { Song } from '../../../types/interfaces/song';
import { SongVersion } from '../../../types/interfaces/song-version';
import { LocalStorage } from '../../../services/local-storage';

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

  constructor() {
    effect(() => {
      this.localStorageService.updateSong(this.song());
      console.log('c');
    });
  }

  onLyricsChange(versionId: string, event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.song.update((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        songVersions: prev.songVersions.map((v) =>
          v.id === versionId ? { ...v, lyrics: value } : v
        ),
      };
    });
    // console.log(this.song());
  }
}
