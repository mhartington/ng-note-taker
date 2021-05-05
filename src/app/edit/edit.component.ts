import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  routeId: string | undefined;
  content: string = '';

  modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
    ],
  };

  constructor(private route: ActivatedRoute, private location: Location) {
    this.routeId = this.route.snapshot.params.id;
  }

  async ngOnInit(): Promise<void> {
    if (this.routeId) {
      const { data } = await Filesystem.readFile({
        path: `notes/${this.routeId}`,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
      this.content = data;
    }
  }
  async save() {
    const file = this.routeId ? this.routeId : `note-${Date.now()}.txt`;
    await Filesystem.writeFile({
      path: `notes/${file}`,
      data: this.content || '',
      directory: Directory.Documents,
      encoding: Encoding.UTF8,
    });
    this.goBack();
  }
  async delete(){
    const file = this.routeId;
    if(file){
      await Filesystem.deleteFile({
        path: `notes/${file}`,
        directory: Directory.Documents
      })
      this.goBack()
    }
  }
  goBack(){
    this.location.back();
  }
}
