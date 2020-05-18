import { Component, OnInit } from '@angular/core';
import { Level1Service } from './level1.service';
import { replaceMonth } from 'src/app/shared/utils.js';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component implements OnInit {
  userName = JSON.parse(localStorage.getItem('loginDetails')).fName;
  tableHead3 = []
  tableHead6 = []
  tableHead12 = []
  obj3 = []
  obj6 = []
  obj12 = []
  constructor(private Level1Service: Level1Service) {}

  ngOnInit() {
    this.Level1Service.getTireOne().subscribe(
    res => {
      for (let i=0; i<3; i++) {
        this.tableHead3.push(`${replaceMonth(res[i].metricmonth)}-${res[i].metricyear}`)
        this.obj3.push(res[i])
      }
      for (let i=0; i<6; i++) {
        this.tableHead6.push(`${replaceMonth(res[i].metricmonth)}-${res[i].metricyear}`)
        this.obj6.push(res[i])
      }
      for (let i=0; i<12; i++) {
        this.tableHead12.push(`${replaceMonth(res[i].metricmonth)}-${res[i].metricyear}`)
        this.obj12.push(res[i])
      }
      this.evaluate('OTD3')
      this.evaluate('QTY3')
    },
    err => {
      console.log(err)
    });
  }
  month6Status = 0
  month12Status = 0
  tabClicked(event){
    if(event.index === 1){
      if(this.month6Status === 0){
        this.evaluate('OTD6')
        this.evaluate('QTY6')
        this.month6Status = 1
      }
    }
    if(event.index === 2){
      if(this.month12Status === 0){
        this.evaluate('OTD12')
        this.evaluate('QTY12')
        this.month12Status = 1
      }
    }
  }

  evaluate(id) {
    setTimeout(function(){
      const tableArray = document.getElementById(id).getElementsByClassName('tableData')
      const mid = tableArray.length/2
      for(let i=0; i<mid; i++){
        let target = parseInt(tableArray[i].innerHTML)
        let actual = parseInt(tableArray[mid+i].innerHTML)
        if(target > actual){
          let element = tableArray[mid+i] as HTMLElement
          element.style.background = '#db1414'
          element.style.color = '#fff'
          if(actual === -99){
            element.innerHTML = 'NA'
          }
        }else{
          let element = tableArray[mid+i] as HTMLElement
          element.style.background = 'green'
          element.style.color = '#fff'
        }
      }
    },0)
  }
}