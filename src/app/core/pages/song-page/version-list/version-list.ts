import { Component, computed, signal } from '@angular/core';
import { mockSongs } from '../../../../mockData/songs';
import { DatePipePipe } from '../../../../shared/pipes/datePipe/date-pipe-pipe';

@Component({
  selector: 'app-version-list',
  imports: [DatePipePipe],
  templateUrl: './version-list.html',
  styleUrl: './version-list.scss',
})
export class VersionList {
  currentVersion = signal(mockSongs[0].currentSongVersion);
  versions = signal(mockSongs[0].songVersions);

  filteredVersions = computed(() =>
    this.versions().filter((v) => v.id !== this.currentVersion().id)
  );
}
