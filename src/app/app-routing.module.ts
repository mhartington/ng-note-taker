import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), data: {depth: 1} },
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then((m) => m.EditModule), data: {depth: 2}},
  { path: 'edit/:id', loadChildren: () => import('./edit/edit.module').then((m) => m.EditModule),data: {depth: 2} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
