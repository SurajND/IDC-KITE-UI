import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboadService: DashboardService ) {
    dashboadService.getProjectKeyIndicatorByYear().subscribe(res => {
      console.log(res);
    })
   }

  ngOnInit() {
  }


  

}
