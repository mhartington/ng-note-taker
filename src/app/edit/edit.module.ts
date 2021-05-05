import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuillModule } from 'ngx-quill';
import { HeaderModule } from '../components/header/header.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [EditComponent],
  imports: [
    MatIconModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    HeaderModule,
    QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: EditComponent,
      },
    ]),
  ],
})
export class EditModule {}
