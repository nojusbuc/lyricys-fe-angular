import { SongVersion } from './song-version';

export interface Song {
  id: string;
  title: string;
  description: string;
  lastEditedAt: Date;
  createdAt: Date;
  songVersions: SongVersion[];
  currentSongVersion: SongVersion;
}
