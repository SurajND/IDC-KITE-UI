import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ChangePasswordService } from '../services/change-password.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;
  validatePasswordForm: FormGroup;
  newPasswordForm = false;
  passwordValidation;
  validationResponse;
  invalidPasswordErorr = false;
  passwordMismatch;
  successMessage;

  constructor(public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private changePasswordService: ChangePasswordService) {

    this.validatePasswordForm = this.formBuilder.group({
      password: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
    })

    this.changePasswordForm = this.formBuilder.group({
      newPassword: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      confirmPassword: [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    })
  }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onVerification(validatePasswordForm) {
    this.passwordValidation = {
      email: JSON.parse(localStorage.getItem('loginDetails')).userid,
      password: validatePasswordForm.value.password
    }
    this.changePasswordService.validatePassword(this.passwordValidation).subscribe(
      res => {
        if (res.message) {
          this.newPasswordForm = true;
        }
      },
      err => {
        if (err.error.message) {
          this.invalidPasswordErorr = err.error.message;
        }
      });
  }

  onPasswordChange(changePasswordForm) {
    console.log(changePasswordForm);
    if (changePasswordForm.value.newPassword === changePasswordForm.value.confirmPassword) {
      this.passwordValidation = {
        email: JSON.parse(localStorage.getItem('loginDetails')).userid,
        password: changePasswordForm.value.newPassword
      }
      this.changePasswordService.changePassword(this.passwordValidation).subscribe(
        res => {
          if (res.message === 'success') {
            this.successMessage = "Password has been changed successfully!!"
          }
        },
        err => {
          if (err.error.message) {
            this.invalidPasswordErorr = err.error.message;
          }
        });
    }
    else {
      this.passwordMismatch = "Passwords doesn't match";
    }
  }
}
