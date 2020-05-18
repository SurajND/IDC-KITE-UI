import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  updateUser: User;
  user: User;
  editable = false;

  constructor(private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private userService: UserService) { }

  userForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    phoneNumber: [''],
    email: [''],
    project: [''],
    role: [''],
    opco: ['']
  });

  ngOnInit() {
    this.getUser();

  }

  getUser() {
    const id = JSON.parse(localStorage.getItem('loginDetails')).id;
    this.userService.getUserById(id).subscribe(res => {
      this.updateUser = res;
      this.user = res;
      this.userForm.patchValue({
        firstName: this.user.fName,
        lastName: this.user.lName,
        phoneNumber: this.user.phoneNumber
      })
    })
  }

  onSubmit() {
    this.updateUser.fName = this.userForm.value.firstName
    this.updateUser.lName = this.userForm.value.lastName
    this.updateUser.phoneNumber = this.userForm.value.phoneNumber
    this.userService.updateUser(this.updateUser.id, this.updateUser).subscribe(
      {
        next: () => {
          this.snackbarService.snackBar("Details updated successfully!!")
          this.getUser();
        },
        error: () => this.snackbarService.snackBar("Error occured while updating details")
      }
    )
  }

  onEdit() {
    this.editable = true;
  }

  onCancel() {
    this.editable = false;
  }
}
