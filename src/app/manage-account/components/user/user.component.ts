import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoleService } from '../../../shared/services/role.service';
import { Role } from 'src/app/shared/models/role.model';
import { User } from 'src/app/shared/models/user.model';
import { ProjectService } from '../../../shared/services/project.service';
import { Project } from 'src/app/shared/models/project.model';
import { UserService } from '../../../shared/services/user.service';
import { OpcoService } from 'src/app/shared/services/opco.service';
import { filter } from 'rxjs/operators';
import { Opco } from 'src/app/shared/models/opco.model';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserAddUpdateComponent } from './user-add-update/user-add-update.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  
  users$: Observable<User[]>;
 

  constructor(
    private userService: UserService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog) { }


  ngOnInit() {
  this.getUsers();
  }

  getUsers(){
   this.users$ =this.userService.getUsers();
  }

  addUser(){
    this.openDialog(new User())
  }
 
  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "700px";
    dialogConfig.height = "550px";
    dialogConfig.data = data;

    const dialogRef = this.dialog.open(UserAddUpdateComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (data.id) {
          result.id = data.id
          this.userService.updateUser(data.id, result).subscribe(
            {
              next: () => {
                this.snackbarService.snackBar("User updated Successfully!!")
                this.getUsers();
              },
              error: () => this.snackbarService.snackBar("Error occured while updating user details")
            }
          );
        }
        else {
          this.userService.postUser(result).subscribe(
            {
              next: () => {
                this.snackbarService.snackBar("New user added Successfully!!")
                this.getUsers();
              },
              error: () => this.snackbarService.snackBar("Error occured while adding user")
            }
          );
        }
      }
    });
  }
}
