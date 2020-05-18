import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadMeComponent } from './read-me/read-me.component';

const routes: Routes = [
  {
    path: '',
    component: ReadMeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadMeRoutingModule { }
