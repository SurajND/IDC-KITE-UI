import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutHeaderComponent } from './layout/base-layout-header/base-layout-header.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: 'home-component',
    component: BaseLayoutHeaderComponent,
    // canActivate: [AuthGuard],
    children :[
      {
        path:'',
        redirectTo: 'dashboard',
        pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule'
      },
      {
        path: 'status-update',
        loadChildren: './status-update/status-update.module#StatusUpdateModule'
      },
      {
        path: 'read-me',
        loadChildren: './read-me/read-me.module#ReadMeModule'
      },
      {
        path: 'manage-account',
        loadChildren: './manage-account/manage-account.module#ManageAccountModule'
      },
      {
        path: 'my-profile',
        loadChildren: './my-profile/my-profile.module#MyProfileModule'
      }


      // {
      //   path: '',
      //   redirectTo: 'home-component/status-update',
      //   pathMatch: 'full'
      // }
    ]
  },
  {
    path: 'login',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
