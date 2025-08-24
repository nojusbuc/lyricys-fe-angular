import { Component, inject, model, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchMenu } from './search-menu/search-menu';
import { SongList } from './song-list/song-list';
import { LocalStorage } from '../../services/local-storage';

@Component({
  selector: 'app-songs-list-page',
  imports: [RouterLink, SearchMenu, SongsListPage, SongList],
  templateUrl: './songs-list-page.html',
  styleUrl: './songs-list-page.scss',
})
export class SongsListPage {
  storage = inject(LocalStorage);
  songs = this.storage.getSongs();
}
