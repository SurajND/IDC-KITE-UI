import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
const routes: Routes = [
  {
  path:'',
  redirectTo: 'level1',
  pathMatch: 'full' 
},
  {
    path: 'level1',
    component: Level1Component
  },
  {
    path: 'level2',
    component: Level2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
