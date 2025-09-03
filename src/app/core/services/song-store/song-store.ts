import { computed, inject, Injectable, signal } from '@angular/core';
import { LocalStorage } from '../local-storage';

@Injectable({
  providedIn: 'root',
})
export class SongStore {
  private ls = inject(LocalStorage);

  private _selectedSongId = signal<string | null>(null);
  private _selectedVersionId = signal<string | null>(null);

  songs = this.ls.songs;

  currentSong = computed(() => {
    const id = this._selectedSongId();
    if (!id) return null;
    return this.songs().find((s) => s.id === id) ?? null;
  });

  currentVersion = computed(() => {
    const s = this.currentSong();
    const vId = this._selectedVersionId();
    if (!s || !vId) return null;
    return s.songVersions.find((v) => v.id === vId) ?? null;
  });

  filteredVersions = computed(() => {
    const s = this.currentSong();
    const vId = this._selectedVersionId();
    if (!s || !vId) return [];
    return s.songVersions.filter((v) => v.id !== vId);
  });

  hydrate(): void {
    if (this.songs().length === 0) {
      this.ls.initializeSongs();
    }
  }

  selectSong(songId: string): void {
    this._selectedSongId.set(songId);
  }
  selectSongVersion(versionId: string): void {
    this._selectedVersionId.set(versionId);
  }

  setCurrentVersion(songId: string, versionId: string): void {
    const next = this.songs().map((s) => {
      if (s.id !== songId) return s;
      const v = s.songVersions.find((x) => x.id === versionId);
      if (!v) return s;
      return { ...s, currentSongVersion: { ...v } };
    });
    this.ls.setSongs(next);
    if (this._selectedSongId() === songId)
      this._selectedVersionId.set(versionId);
  }
}
