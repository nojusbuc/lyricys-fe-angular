import { Component, model, signal } from '@angular/core';
import { mockSongs } from '../../../mockData/songs';
import { RouterLink } from '@angular/router';
import { SearchMenu } from './search-menu/search-menu';
import { SongList } from './song-list/song-list';

@Component({
  selector: 'app-songs-list-page',
  imports: [RouterLink, SearchMenu, SongsListPage, SongList],
  templateUrl: './songs-list-page.html',
  styleUrl: './songs-list-page.scss',
})
export class SongsListPage {
  songs = model(mockSongs);
}
