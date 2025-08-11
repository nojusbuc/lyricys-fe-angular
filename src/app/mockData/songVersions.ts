import { SongVersion } from '../core/types/interfaces/song-version';

export const mockSongVersions: Record<string, SongVersion[]> = {
  song1: [
    {
      id: '8c35f5ab-93a7-4a73-b4cb-56ff6d1d89c2',
      title: 'Initial Draft',
      notes: 'First complete version of the lyrics.',
      lyrics: 'Standing on the shore, watching time drift away...',
      lastEditedAt: new Date('2025-08-01T10:00:00Z'),
      createdAt: new Date('2025-08-01T09:00:00Z'),
    },
    {
      id: 'b6e2cf83-23a4-4f62-b9f6-034c8d93c46c',
      title: 'Chorus Rewrite',
      notes: 'Updated chorus to improve rhyme and flow.',
      lyrics: 'Standing on the shore, feeling the tide in my veins...',
      lastEditedAt: new Date('2025-08-03T12:00:00Z'),
      createdAt: new Date('2025-08-02T10:00:00Z'),
    },
    {
      id: 'aaaaaaaa-23a4-4f62-b9f6-034c8d93c46c',
      title: 'Verse changes',
      notes: 'Updated verse to fit another concept',
      lyrics: 'In the middle of the parking lot, yeah...',
      lastEditedAt: new Date('2025-08-03T12:00:00Z'),
      createdAt: new Date('2025-08-02T10:00:00Z'),
    },
  ],
  song2: [
    {
      id: '2fa5df99-bc09-4f1b-a6d4-17cbbfd70a54',
      title: 'Original',
      notes: 'Full lyrics completed with bridge section.',
      lyrics: 'City lights fade as the night takes hold...',
      lastEditedAt: new Date('2025-07-15T14:00:00Z'),
      createdAt: new Date('2025-07-14T13:00:00Z'),
    },
    {
      id: '9e4b2e3e-649f-4c87-b678-2f1d71b99f28',
      title: 'Verse Adjustment',
      notes: 'Changed second verse to match the song’s theme better.',
      lyrics: 'City lights fade, dreams begin to unfold...',
      lastEditedAt: new Date('2025-07-17T18:00:00Z'),
      createdAt: new Date('2025-07-16T16:00:00Z'),
    },
  ],
  song3: [
    {
      id: 'c8d39b7c-9f89-4d2e-b2e1-3ec3f2f04665',
      title: 'First Draft',
      notes: 'Lyrics written with placeholder chorus lines.',
      lyrics: 'Shadows in the rain, whispers in the dark...',
      lastEditedAt: new Date('2025-06-10T20:00:00Z'),
      createdAt: new Date('2025-06-09T19:00:00Z'),
    },
    {
      id: '4bfa0413-9dc6-4805-a70c-2c03a6d2c1aa',
      title: 'Chorus Update',
      notes: 'Rewrote chorus to make imagery stronger.',
      lyrics: 'Shadows in the rain, chasing the light of the stars...',
      lastEditedAt: new Date('2025-06-12T21:00:00Z'),
      createdAt: new Date('2025-06-11T20:00:00Z'),
    },
    {
      id: 'f95a7e91-48a7-4d85-b9e4-8cb3a74826fb',
      title: 'Final Edit',
      notes: 'Minor grammar fixes and tightened phrasing.',
      lyrics: 'Shadows in the rain, chasing starlight through the night...',
      lastEditedAt: new Date('2025-06-14T22:00:00Z'),
      createdAt: new Date('2025-06-13T21:00:00Z'),
    },
  ],
};
