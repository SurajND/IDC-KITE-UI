import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusUpdateRoutingModule } from './status-update-routing.module';
import { StatusComponent } from './status/status.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StatusComponent],
  imports: [
    CommonModule,
    StatusUpdateRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class StatusUpdateModule { }
