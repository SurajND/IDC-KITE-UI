import { Component, OnInit } from '@angular/core';
import { ProjectKeyIndicator } from '../shared/models/projectKeyIndicator.model';
import { KeyIndicator } from '../shared/models/keyIndicator.model';
import { ProjectKeyIndicatorYear, AllOpcosForYear, OpcosForYear } from '../shared/models/projectKeyIndicatorYear.model';
import { Opco } from '../shared/models/opco.model';
import { ProjectKeyIndicatorService } from '../shared/services/projectKeyIndicator.service';
import { KeyIndicatorService } from '../shared/services/key-indicator.service';
import { ProjectKeyIndicatorYearService } from '../shared/services/project-key-indicator-year.service';
import { OpcoService } from '../shared/services/opco.service';
import { filter } from 'rxjs/operators';
import { replaceMonth } from 'src/app/shared/utils.js';
import { Chart } from 'chart.js';
import { Project } from '../shared/models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projectKeyIndicators: ProjectKeyIndicator[];

  keyIndicators: KeyIndicator[];
  showResult: number[] = [];

  currmonth = replaceMonth(new Date().getMonth())
  opcoName: string[]
  targetValue: number[]
  OrignalValue: number[]
  projectKeyIndicatorYears: ProjectKeyIndicatorYear[]
  data: any;
  datas: any[] = [];
  pieData: any[] = [];
  opcoData: any[] = [];
  selectedOpco: Opco;
  selectedYear: any;
  selectedQuater: any;
  options: any;
  opcoPieData: any[] = [];
  opcoBarDataAll: any[] = [];
  allOpcosForYear: AllOpcosForYear;
  opcosForYear : OpcosForYear;
  yearsList: number[] = [];

  opcos: Opco[];

  curryear = new Date().getFullYear()
  constructor(private projectKeyIndicatorService: ProjectKeyIndicatorService,
      private keyIndicatorService: KeyIndicatorService,
      private projectKeyIndicatorYearService: ProjectKeyIndicatorYearService,
      private opcoService: OpcoService) {
  }



  ngOnInit() {

    //set the dropdown for years
    this.selectedYear = this.curryear;
    for (let i = new Date().getFullYear(); i >= 2000 ; i--){
        this.yearsList.push(i);
    }

    //get keyindicators list
    this.keyIndicatorService.getKeyIndicators().pipe(filter(res => !!res)).subscribe(res =>
        {
            this.keyIndicators = res;            
        }         
    )
      
    //get opcos list
    this.opcoService.getOpcos().pipe(filter(res => !!res)).subscribe(
        res => {
        this.opcos = res;            
        if( this.keyIndicators && this.opcos)
            this.show();
        }
    );      
  }


  show() {
      this.getDataForPie();
      for(let keyIndicator of this.keyIndicators){
          let chart = {
            Id: this.opcos.map(x => x.id),
            Indicator: keyIndicator.indicator,
            labels: this.opcos.map(x => x.operationalCompanyName),
            datasets: [
                {
                    label: 'Target',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40] ,
                    fill: false
                },
                {
                    label: 'Actual',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false
                }
            ]
        }
        
        this.datas.push(chart);
      }

      this.opcoBarDataAll = this.datas;

      



      for (let keyIndicator of this.keyIndicators) {
          let dataSetActual : number[] = [];
          let dataSetTarget : number[] = [];
          for (let opco of this.opcos) {

              
              // dataSetActual.push(this.projectKeyIndicators
              //     .filter(x => x.keyIndicatorId === keyIndicator.id)
              //     .filter(x => x.project.operationalCompanyId === opco.id)
              //     .reduce((sum, item) => sum + item.actual, 0));

                  // dataSetTarget.push(this.projectKeyIndicatorYears
                  // .filter(x => x.keyIndicatorId === keyIndicator.id)
                  // .find(x => x.project.operationalCompanyId === opco.id).value)



              // this.showResult.push(
              //     (this.projectKeyIndicators
              //         .filter(x => x.keyIndicatorId === keyIndicator.id)
              //         .filter(x => x.project.operationalCompanyId === opco.id)
              //         .reduce((sum, item) => sum + item.actual, 0))
              // ) ;
              // console.log(this.showResult)
          }
 
      

          
      }


  }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getDataForPie() {        
        this.getOpcoValuesByYear();
        this.getOpcosValuesByYear(this.curryear);
       

        // this.opcos.forEach(opco => {
        //     let pieData: any[] = [];
        //     this.keyIndicators.forEach(keyIndicator => {
        //         let p = this.getRandomInt(50, 100)
        //         let data = {
        //             Indicator: keyIndicator.indicator,
        //             labels: [ Math.floor((p/100)*100) + '%',  Math.floor((100 - p)/100 * 100) + '%'],
        //             datasets: [
        //                 {
        //                     data: [p, 100 - p],
        //                     backgroundColor: [
        //                         "#09a627",
        //                         "#42A5F5"
        //                     ],
        //                     hoverBackgroundColor: [
        //                         "#09a627",
        //                         "#42A5F5"
        //                     ]
        //                 }],
        //             options: {
        //                     title: {
        //                         display: true,
        //                         text: keyIndicator.indicator,
        //                         fontSize: 14,
        //                         fontColor: "#19639E"
        //                     },
        //                     legend: {
        //                         position: 'bottom'
        //                     }
        //                 }
        //             };                
        //         pieData.push(data);
        //     });            
        //     this.opcoData.push({
        //         "name" : opco.operationalCompanyName,
        //         "chart" : pieData,
        //         "id" : opco.id
        //     });            
        // });

        // this.opcoPieData = this.opcoData;
    }

    opcoChange(){
        if(this.selectedOpco){
            var list = this.getOpcoValuesByYear();
            this.opcoPieData = this.opcoData.filter(x => x.id == this.selectedOpco);
            this.opcoBarDataAll = this.datas.filter(x => x.Id == this.selectedOpco);
        }
        else{
            var list = this.getOpcosValuesByYear(this.selectedYear);
            this.opcoPieData = this.opcoData;
            this.opcoBarDataAll = this.datas;
        }
    }
    
    getOpcoValuesByYear(){
        if(!this.opcosForYear && this.selectedOpco)
        this.projectKeyIndicatorYearService.getProjectKeyIndicatorForAnOpcoForAYear(this.selectedOpco, this.selectedYear).pipe(filter(res => !! res)).subscribe(
            res => {
                this.opcosForYear = res;
            }
        )
    }

    getOpcosValuesByYear(curryear){
        if(!this.allOpcosForYear)
        this.projectKeyIndicatorYearService.getProjectKeyIndicatorByAllOpcoForAYear(this.curryear).pipe(filter(res => !! res)).subscribe(
            res => {
                this.allOpcosForYear = new AllOpcosForYear();
                this.allOpcosForYear.opcos = res; 
                this.pieFormation();               
            }
        )
    }

    pieFormation(){
        this.allOpcosForYear.opcos.forEach(element => {
            let pieData: any[] = [];
            element.value.forEach(k => {
                if(k == null)
                    return;
                let data = {
                    Indicator: this.keyIndicators.find(i => i.id == k.keyIndicatorId).indicator,
                    labels: [ Math.floor((k.value/100)*100) + '%',  Math.floor((100 - k.value)/100 * 100) + '%'],
                    datasets: [
                        {
                            data: [k.value, 100 - k.value],
                            backgroundColor: [
                                "#09a627",
                                "#42A5F5"
                            ],
                            hoverBackgroundColor: [
                                "#09a627",
                                "#42A5F5"
                            ]
                        }],
                    options: {
                            title: {
                                display: true,
                                text: this.keyIndicators.find(i => i.id == k.keyIndicatorId).indicator,
                                fontSize: 14,
                                fontColor: "#19639E"
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    };                
                pieData.push(data);
            });
            
            if(pieData.length > 0){
                this.opcoData.push({
                    "name" : this.opcos.find(x => x.id == element.opco).operationalCompanyName,
                    "chart" : pieData,
                    "id" : element.opco
                });  
    
                this.opcoPieData = this.opcoData;
            }
            
        });
    }
}