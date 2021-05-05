import { Component, OnInit } from '@angular/core';
import { Filesystem, Directory, ReaddirResult } from '@capacitor/filesystem';
const noop = () => {};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  notes: string[] = [];
  constructor() {}

  async ngOnInit(): Promise<void> {
    await Filesystem.requestPermissions();
    this.initFileSystem();
  }
  makeDir(): Promise<void> {
    return Filesystem.mkdir({
      path: 'notes',
      directory: Directory.Documents,
    });
  }
  readDir(): Promise<ReaddirResult> {
    return Filesystem.readdir({
      path: 'notes',
      directory: Directory.Documents,
    });
  }
  initFileSystem() {
    this.makeDir()
      .then(noop, noop)
      .then(this.readDir)
      .then(({ files }) => {
        this.notes = files.sort(
          (a, b) =>
            parseInt(b.replace(/note-/, '').replace(/.txt/, '')) -
            parseInt(a.replace(/note-/, '').replace(/.txt/, ''))
        );
      });
  }
}
