import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { KiteAdminNavConstants, KiteUserNavConstants } from '../../app.constants.component';
import { MatDialog } from '@angular/material';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';


const SMALL_WIDTH_BREAKPOINT = 720; 


@Component({
  selector: 'app-base-layout-header',
  templateUrl: './base-layout-header.component.html',
  styleUrls: ['./base-layout-header.component.scss']
})
export class BaseLayoutHeaderComponent implements OnInit {

  NavItems; 
  currentUser: User;
  private mediaMatcher: MediaQueryList = 
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
  panelOpenState = false;

  constructor(private router: Router, private userService: UserService,
    public dialog: MatDialog, zone: NgZone) { this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
  }

  ngOnInit() {
    const loginDetails: User = JSON.parse(localStorage.getItem('loginDetails'));
    this.NavItems= (loginDetails.role.roleType === "Admin") ? KiteAdminNavConstants: KiteUserNavConstants;
    const id = JSON.parse(localStorage.getItem('loginDetails')).id;
    this.userService.getUserById(id).subscribe(res => {
   
      this.currentUser = res;
      
    })
  }

  isSmallScreen(){
    return this.mediaMatcher.matches;
  }

  logout(){
    localStorage.removeItem('loginDetails');
    this.router.navigate(['/login']);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '500px',
    });
  }

}
