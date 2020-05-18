import { Component, OnInit } from '@angular/core';
import { Level2Service } from './level2.service';
import { replaceMonth } from 'src/app/shared/utils.js';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.scss']
})
export class Level2Component implements OnInit {
  project3Data = []
  project6Data = []
  project12Data = []
  
  tableHead3 = []
  tableHead6 = []
  tableHead12 = []
  
  constructor( private Level1Service: Level2Service) { }

  ngOnInit() {
    this.Level1Service.getTireTwo().subscribe(
      res => {
        for (let i=0; i<3; i++) {
          this.tableHead3.push(`${replaceMonth(res[0].metric[i].metricmonth)}-${res[0].metric[i].metricyear}`)
        }
        for (let i=0; i<6; i++) {
          this.tableHead6.push(`${replaceMonth(res[0].metric[i].metricmonth)}-${res[0].metric[i].metricyear}`)
        }
        for (let i=0; i<12; i++) {
          this.tableHead12.push(`${replaceMonth(res[0].metric[i].metricmonth)}-${res[0].metric[i].metricyear}`)
        }
        this.latest3m(res)
        this.latest6m(res)
        this.latest12m(res)
      },
      err => {
        console.log(err)
      });
  }
  latest3m(res){
    for (let i=0;i<res.length;i++){
      let newObj = {
        project: res[i].project,
        metric: res[i].metric.slice(0,3)
      }
      this.project3Data.push(newObj)
      this.evaluate()
    }
  }
  latest6m(res){
    for (let i=0;i<res.length;i++){
      let newObj = {
        project: res[i].project,
        metric: res[i].metric.slice(0,6)
      }
      this.project6Data.push(newObj)
    }
  }
  latest12m(res){
    this.project12Data = res
  }
  tabClicked(event){
    this.evaluate()
  }
  evaluate() {
    setTimeout(function(){
      const tableArray = document.getElementsByTagName('td')
      for(let i=0; i<tableArray.length; i++){
        if(tableArray[i].innerHTML !== 'NA'){
          let data = tableArray[i].innerHTML.split(' ')
          let actual = parseInt(data[0])
          let target = parseInt(data[1].replace('(', '').replace(')', ''))
          let element = tableArray[i] as HTMLElement
          element.style.color = '#fff'
          if(actual === -99){
            element.innerHTML = 'NA'
            element.style.background = '#db1414'
          }else{
            if(target > actual){
              element.style.background = '#db1414'
            }else{
              element.style.background = 'green'
            }
          }
        }
      }
    },0)
  }
}
