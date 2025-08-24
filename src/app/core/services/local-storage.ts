import { Injectable, signal } from '@angular/core';
import { mockSongs } from '../../mockData/songs';
import { Song } from '../types/interfaces/song';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  private storageKey = 'songs';

  private _songs = signal<Song[]>(this.initializeSongs());
  songs = this._songs.asReadonly();

  initializeSongs(): Song[] {
    this.storeSongs(mockSongs);
    return mockSongs;
  }

  storeSongs(songs: Song[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(songs));
  }

  getSongs(): Song[] {
    return this._songs();
  }
  getSongById(id: string): Song | null {
    return this._songs().find((s) => s.id === id) ?? null;
  }
}
