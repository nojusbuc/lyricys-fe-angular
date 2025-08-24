import { Component, computed, inject, model, signal } from '@angular/core';
import { SongHeader } from './song-header/song-header';
import { LyricsEditor } from './lyrics-editor/lyrics-editor';
import { VersionList } from './version-list/version-list';
import { mockSongs } from '../../../mockData/songs';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../../types/interfaces/song';
import { SongVersion } from '../../types/interfaces/song-version';
import { toSignal } from '@angular/core/rxjs-interop';

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

  song = computed(() => {
    const id = this.songId();
    return id ? mockSongs.find((s) => s.id === id) ?? null : null;
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
