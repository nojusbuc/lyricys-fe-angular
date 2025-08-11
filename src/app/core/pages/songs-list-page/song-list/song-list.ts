import { Component, signal } from '@angular/core';
import { mockSongs } from '../../../../mockData/songs';
import { RouterLink } from '@angular/router';
import { DatePipePipe } from '../../../../shared/pipes/datePipe/date-pipe-pipe';

@Component({
  selector: 'app-song-list',
  imports: [RouterLink, DatePipePipe],
  templateUrl: './song-list.html',
  styleUrl: './song-list.scss',
})
export class SongList {
  songs = signal(mockSongs);
}
