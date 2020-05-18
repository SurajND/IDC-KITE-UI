import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './reports-routing.module';
import { Level2Component } from './level2/level2.component';
import { Level1Component } from './level1/level1.component';
import { HitmissComponent } from './reused/hitmiss/hitmiss.component';
import { MatCardModule, MatDividerModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatOptionModule, MatSelectModule, MatTabsModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [HitmissComponent,Level1Component,
    Level2Component],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    FlexLayoutModule    
  ]
})
export class ReportsModule { }
