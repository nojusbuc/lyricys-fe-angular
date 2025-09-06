import { Component, inject, model } from '@angular/core';
import { DatePipePipe } from '../../../../shared/pipes/datePipe/date-pipe-pipe';
import { Song } from '../../../types/interfaces/song';
import { SongVersion } from '../../../types/interfaces/song-version';
import { SongStore } from '../../../services/song-store/song-store';

@Component({
  selector: 'app-song-header',
  imports: [DatePipePipe],
  templateUrl: './song-header.html',
  styleUrl: './song-header.scss',
})
export class SongHeader {
  songStore = inject(SongStore);

  song = model.required<Song>();
  version = model.required<SongVersion>();

  onSongTitleBlur(event: FocusEvent) {
    const value = (event.target as HTMLInputElement).value.trim();
    // make sure to compare values before calling the method, also do this for lyrics
    // or transfer checkin logic to the update method.

    if (this.song().title !== value) {
      const s = {
        ...this.song(),
        title: (event.target as HTMLInputElement).value,
      };
      this.songStore.updateSong(s);
    }
  }

  onVersionTitleBlur(event: FocusEvent) {
    const v = {
      ...this.version(),
      title: (event.target as HTMLInputElement).value.trim(),
    };

    if (this.version().title !== v.title) {
      this.songStore.updateSongVersion(this.song().id, v);
    }
  }

  ngOnInit() {
    console.log(this.song().title);
  }
}
