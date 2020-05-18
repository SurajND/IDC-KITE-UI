import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MatCardModule, MatDividerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class MyProfileModule { }
