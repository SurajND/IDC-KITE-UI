import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadMeRoutingModule } from './read-me-routing.module';
import { ReadMeComponent } from './read-me/read-me.component';

@NgModule({
  declarations: [ReadMeComponent],
  imports: [
    CommonModule,
    ReadMeRoutingModule
  ]
})
export class ReadMeModule { }
