import { Component, model, signal } from '@angular/core';
import { mockSongs } from '../../../../mockData/songs';
import { DatePipePipe } from '../../../../shared/pipes/datePipe/date-pipe-pipe';
import { Song } from '../../../types/interfaces/song';
import { SongVersion } from '../../../types/interfaces/song-version';

@Component({
  selector: 'app-song-header',
  imports: [DatePipePipe],
  templateUrl: './song-header.html',
  styleUrl: './song-header.scss',
})
export class SongHeader {
  song = model.required<Song>();
  version = model.required<SongVersion>();
}
