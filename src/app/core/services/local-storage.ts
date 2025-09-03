import { Injectable, signal } from '@angular/core';
import { mockSongs } from '../../mockData/songs';
import { Song } from '../types/interfaces/song';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  private storageKey = 'songs';
  ISO_Z = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

  private _songs = signal<Song[]>(this.getSongsFromLocalStorage());
  songs = this._songs.asReadonly();

  setSongs(next: Song[]) {
    this._songs.set(next);
    localStorage.setItem(this.storageKey, JSON.stringify(next));
  }

  initializeSongs(): Song[] {
    this.setSongs(mockSongs);
    return mockSongs;
  }

  getSongs(): Song[] {
    return this._songs();
  }
  getSongsFromLocalStorage(): Song[] {
    const raw = localStorage.getItem(this.storageKey); // returns string or null
    if (!raw) {
      return [];
    }
    try {
      return this.reviveDates<Song[]>(raw);
    } catch (e) {
      console.error('Failed to parse songs from localStorage', e);
      return [];
    }
  }

  getSongById(id: string): Song | null {
    return this._songs().find((s) => s.id === id) ?? null;
  }

  updateSong(song: Song): void {
    this._songs.update((prev) => {
      const idx = prev.findIndex((s) => s.id === song.id);
      if (idx === -1) return prev;
      const next = prev.slice();
      next[idx] = song;
      localStorage.setItem(this.storageKey, JSON.stringify(next));
      return next;
    });

    const songs = this.getSongs();
    const index = songs.findIndex((s) => s.id === song.id);
    if (index !== -1) {
      songs[index] = song;
      localStorage.setItem(this.storageKey, JSON.stringify(songs));
    }
  }

  reviveDates<T>(json: string): T {
    return JSON.parse(json, (_k, v) =>
      typeof v === 'string' && this.ISO_Z.test(v) ? new Date(v) : v
    );
  }
}
