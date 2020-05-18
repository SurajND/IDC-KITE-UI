import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcoComponent } from './components/opco/opco.component';
import { ManageAccountRoutingModule } from './manage-account-routing.module';
import { MatCardModule, MatSidenavModule, MatDividerModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatIconModule, MatSelectModule, MatCheckboxModule, MatTableModule, MatSnackBarModule, MatDialogModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectComponent } from './components/project/project.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { KeyIndicatorComponent } from './components/key-indicator/key-indicator.component';
import { UserComponent } from './components/user/user.component';
import { OpcoAddUpdateComponent } from './components/opco/opco-add-update/opco-add-update.component';
import { ProjectAddUpdateComponent } from './components/project/project-add-update/project-add-update.component';
import { KeyIndicatorAddUpdateComponent } from './components/key-indicator/key-indicator-add-update/key-indicator-add-update.component';
import { UserAddUpdateComponent } from './components/user/user-add-update/user-add-update.component';


@NgModule({
  declarations: [OpcoComponent, ProjectComponent, KeyIndicatorComponent, UserComponent, OpcoAddUpdateComponent, ProjectAddUpdateComponent, KeyIndicatorAddUpdateComponent, UserAddUpdateComponent],
  imports: [
    CommonModule,
    ManageAccountRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule
  ],
  entryComponents: [OpcoAddUpdateComponent, ProjectAddUpdateComponent, KeyIndicatorAddUpdateComponent, UserAddUpdateComponent]
})
export class ManageAccountModule { }
