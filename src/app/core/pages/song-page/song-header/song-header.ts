import { Component, signal } from '@angular/core';
import { mockSongs } from '../../../../mockData/songs';
import { DatePipePipe } from '../../../../shared/pipes/datePipe/date-pipe-pipe';

@Component({
  selector: 'app-song-header',
  imports: [DatePipePipe],
  templateUrl: './song-header.html',
  styleUrl: './song-header.scss',
})
export class SongHeader {
  song = signal(mockSongs[0]);
}
