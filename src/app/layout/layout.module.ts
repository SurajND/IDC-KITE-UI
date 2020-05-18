import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutHeaderComponent } from './base-layout-header/base-layout-header.component';

import { AppRoutingModule } from '../app-routing.module';
import { MatMenuModule, MatToolbarModule, MatDialogModule, MatSidenavModule, MatIconModule, MatExpansionModule } from '@angular/material';
import { ChangePasswordComponent } from './change-password/change-password.component';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [BaseLayoutHeaderComponent, ChangePasswordComponent
   ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule,
    MatExpansionModule
  ],
  entryComponents: [ChangePasswordComponent]
})
export class LayoutModule { }
