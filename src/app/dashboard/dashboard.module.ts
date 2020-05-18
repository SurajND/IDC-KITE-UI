import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CarouselModule} from 'primeng/carousel';
import { MatCardModule, MatSidenavModule, MatDividerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatSnackBarModule, MatDialogModule, MatTooltipModule, MatDivider } from '@angular/material';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
  path:'',
  redirectTo: 'dashboard',
  pathMatch: 'full' 
},
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CarouselModule,
    MatCardModule,
    ChartModule,
    MatDividerModule,
    DropdownModule,
    FormsModule,
    MatSelectModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { 
  
}
