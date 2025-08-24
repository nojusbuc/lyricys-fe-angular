import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { mockSongs } from '../../../mockData/songs';
import { LyricsEditor } from './lyrics-editor/lyrics-editor';
import { SongHeader } from './song-header/song-header';
import { VersionList } from './version-list/version-list';
import { LocalStorage } from '../../services/local-storage';

@Component({
  selector: 'app-song-page',
  imports: [SongHeader, LyricsEditor, VersionList],
  templateUrl: './song-page.html',
  styleUrl: './song-page.scss',
})
export class SongPage {
  private route = inject(ActivatedRoute);
  private paramMap = toSignal(this.route.paramMap);
  private songId = computed(() => this.paramMap()?.get('id') ?? null);
  private versionId = computed(() => this.paramMap()?.get('versionId') ?? null);

  storage = inject(LocalStorage);

  song = computed(() => {
    const id = this.songId();
    return id ? this.storage.getSongById(id) : null;
  });

  version = computed(() => {
    const vId = this.versionId();
    const s = this.song();
    return vId && s ? s.songVersions.find((v) => v.id === vId) ?? null : null;
  });

  filteredVersions = computed(() => {
    const vId = this.versionId();
    const s = this.song();
    return vId && s ? s.songVersions.filter((v) => v.id !== vId) ?? [] : null;
  });
}
