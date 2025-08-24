import { Component, computed, model, signal } from '@angular/core';
import { mockSongs } from '../../../../mockData/songs';
import { DatePipePipe } from '../../../../shared/pipes/datePipe/date-pipe-pipe';
import { Song } from '../../../types/interfaces/song';
import { RouterLink } from '@angular/router';
import { SongVersion } from '../../../types/interfaces/song-version';

@Component({
  selector: 'app-version-list',
  imports: [DatePipePipe, RouterLink],
  templateUrl: './version-list.html',
  styleUrl: './version-list.scss',
})
export class VersionList {
  song = model.required<Song>();
  openedVersion = model.required<SongVersion>();
  filteredVersions = model.required<SongVersion[]>();

  // currentVersion = computed(() => this.song().currentSongVersion);
  // versions = computed(() => this.song().songVersions);

  // filteredVersions = computed(() =>
  //   this.versions().filter((v) => v.id !== this.currentVersion().id)
  // );
}
