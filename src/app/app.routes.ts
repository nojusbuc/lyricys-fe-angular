import { Routes } from '@angular/router';
import { SongPage } from './core/pages/song-page/song-page';
import { SongsListPage } from './core/pages/songs-list-page/songs-list-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'songs',
    pathMatch: 'full',
  },
  {
    path: 'songs',
    component: SongsListPage,
  },
  {
    path: 'songs/:id',
    component: SongPage,
  },
];
