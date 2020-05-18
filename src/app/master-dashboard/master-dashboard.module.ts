import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterDashboardRoutingModule } from './master-dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MasterDashboardRoutingModule
  ]
})
export class MasterDashboardModule { }
