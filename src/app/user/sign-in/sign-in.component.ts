import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loginResponse: User;
  errorResponse = null;
  invalidCredentials= false;
  cars: Car[] = [
    { opco1: '../../../assets/images/beckman-coulter-logo.png', opco2: '../../../assets/images/Danaher_Digital.png', opco3: '../../../assets/images/Hach.jpg' },
    { opco1: '../../../assets/images/Leica-Microsystetms.png', opco2: '../../../assets/images/radiometer.png', opco3: '../../../assets/images/hemocue.png'  },
    { opco1: '../../../assets/images/Cepheid.png', opco2: '../../../assets/images/Leica_Biosystems_logo.png',  opco3: '../../../assets/images/beckman-coulter-logo.png' }
  ];
  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private authenticateService: AuthenticateService) {
    
  this.loginForm = this.formBuilder.group({    
    userName: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6)  
      ])
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6)  
      ])
    ],
    
  });
   }

   get login() { return this.loginForm.get('userName'); }
   get password() { return this.loginForm.get('password'); }

  ngOnInit() {
  }




  onSubmit(loginForm) {
    if(this.loginForm.invalid){
      this.login.markAsTouched();
      this.password.markAsTouched();
    }
    else {
      // localStorage.clear();
      // this.loginService.login(loginForm.value).subscribe(
      //   res =>
      //   {
      //     this.loginResponse =res;
      //     localStorage.setItem('loginDetails', JSON.stringify(this.loginResponse));
      //     console.log(this.loginResponse.sessionid);
      //     if(this.loginResponse.sessionid){
      //       this.router.navigate(['/home-component']);
      //     }
      //     else {
      //       console.log(this.loginResponse.message);
      //       this.errorResponse = this.loginResponse.message;
      //     }
      //   })
        this.authenticateService.authenticateUser(loginForm.value).subscribe(
          {
            next: (res) => {
              this.loginResponse = res;
                localStorage.setItem('loginDetails', JSON.stringify(this.loginResponse));
                console.log(this.loginResponse);
                if(this.loginResponse.token){
                        this.router.navigate(['/home-component']);
                }
            },
            error: (err) => {
              if(err.error.message)
              this.invalidCredentials= true;
            }
          }        
        )

    }
   
  }
}

export interface Car {
  opco1?;
  opco2?;
  opco3?;
}
