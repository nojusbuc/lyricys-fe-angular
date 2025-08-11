import { Song } from '../core/types/interfaces/song';
import { mockSongVersions } from './songVersions';

export const mockSongs: Song[] = [
  {
    id: 'a9a63b29-3ec2-4cd0-b3db-4d20c1d2f8b4',
    title: 'Waves of Time',
    lastEditedAt: new Date('2025-08-03T12:00:00Z'),
    createdAt: new Date('2025-08-01T09:00:00Z'),
    songVersions: mockSongVersions['song1'],
    currentSongVersion: mockSongVersions['song1'][1],
    description: 'Sound about passage of time',
  },
  {
    id: '0d3cf96a-b5aa-46b0-91fc-7582a59f69ab',
    title: 'Skyline Dreams',
    lastEditedAt: new Date('2025-07-17T18:00:00Z'),
    createdAt: new Date('2025-07-14T13:00:00Z'),
    songVersions: mockSongVersions['song2'],
    currentSongVersion: mockSongVersions['song2'][0], // Original
    description: 'Sound about chasing dreams',
  },
  {
    id: 'f7d184e7-416d-4c3c-a4c2-5cb6c4a7edb0',
    title: 'Shadows and Light',
    lastEditedAt: new Date('2025-06-14T22:00:00Z'),
    createdAt: new Date('2025-06-09T19:00:00Z'),
    songVersions: mockSongVersions['song3'],
    currentSongVersion: mockSongVersions['song3'][2], // Final Edit
    description: 'Song about becoming',
  },
];
