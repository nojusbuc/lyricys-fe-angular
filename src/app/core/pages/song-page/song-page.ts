import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { mockSongs } from '../../../mockData/songs';
import { LyricsEditor } from './lyrics-editor/lyrics-editor';
import { SongHeader } from './song-header/song-header';
import { VersionList } from './version-list/version-list';
import { LocalStorage } from '../../services/local-storage';
import { SongStore } from '../../services/song-store/song-store';

@Component({
  selector: 'app-song-page',
  imports: [SongHeader, LyricsEditor, VersionList],
  templateUrl: './song-page.html',
  styleUrl: './song-page.scss',
})
export class SongPage {
  private route = inject(ActivatedRoute);
  private store = inject(SongStore);
  private paramMap = toSignal(this.route.paramMap);
  private songId = computed(() => this.paramMap()?.get('id') ?? null);
  private versionId = computed(() => this.paramMap()?.get('versionId') ?? null);

  storage = inject(LocalStorage);

  song = this.store.currentSong;
  version = this.store.currentVersion;
  filteredVersions = this.store.filteredVersions;

  constructor() {
    this.store.hydrate();

    effect(() => {
      const songId = this.paramMap()?.get('id');
      const versionId = this.paramMap()?.get('versionId');
      if (songId) this.store.selectSong(songId);
      if (versionId) this.store.selectSongVersion(versionId);
    });
  }
}
