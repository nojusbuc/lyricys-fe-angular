import { Component } from '@angular/core';
import { SongHeader } from './song-header/song-header';
import { LyricsEditor } from './lyrics-editor/lyrics-editor';
import { VersionList } from './version-list/version-list';

@Component({
  selector: 'app-song-page',
  imports: [SongHeader, LyricsEditor, VersionList],
  templateUrl: './song-page.html',
  styleUrl: './song-page.scss',
})
export class SongPage {}
