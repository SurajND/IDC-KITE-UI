import { Component, OnInit } from '@angular/core';
import { ProjectKeyIndicator } from '../shared/models/projectKeyIndicator.model';
import { KeyIndicator } from '../shared/models/keyIndicator.model';
import { ProjectKeyIndicatorYear } from '../shared/models/projectKeyIndicatorYear.model';
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

  opcos: Opco[];

  curryear = new Date().getFullYear()
  constructor(private projectKeyIndicatorService: ProjectKeyIndicatorService,
      private keyIndicatorService: KeyIndicatorService,
      private projectKeyIndicatorYearService: ProjectKeyIndicatorYearService,
      private opcoService: OpcoService) {
        
  }



  ngOnInit() {
      // this.projectKeyIndicatorService.getProjectKeyIndicatorsByYear(this.curryear).pipe(filter(res => res)).subscribe(
      //     res => {
      //         this.projectKeyIndicators = res;
      //     }
      // )


      this.keyIndicatorService.getKeyIndicators().pipe(filter(res => !!res)).subscribe(res =>
          {
              this.keyIndicators = res;            
          }         
      )

      // this.projectKeyIndicatorYearService.getProjectKeyIndicatorYearByYear(this.curryear).pipe(filter(res => !! res)).subscribe(
      //     res =>{
      //         this.projectKeyIndicatorYears = res;
      //         console.log(this.projectKeyIndicatorYears);
      //     }        
      // )
      

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
                    data: [65, 59, 80, 81, 56, 55, 40],
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
        // this.data = {
        //     //Indicator: keyIndicator.indicator,
        //     labels: ['Percentage','Target'],
        //     datasets: [
        //         {
        //             data: [300, 100],
        //             backgroundColor: [
        //                 "#FF6384",
        //                 "#36A2EB"
        //             ],
        //             hoverBackgroundColor: [
        //                 "#FF6384",
        //                 "#36A2EB"
        //             ]
        //         }],

        //     };
    
        // this.pieData.push(this.data);
        // this.pieData.push(this.data);
        // this.pieData.push(this.data);
        // this.pieData.push(this.data);
        // this.pieData.push(this.data);
        

        this.opcos.forEach(opco => {
            let pieData: any[] = [];
            this.keyIndicators.forEach(keyIndicator => {
                let p = this.getRandomInt(50, 100)
                let data = {
                    Indicator: keyIndicator.indicator,
                    labels: [ Math.floor((p/100)*100) + '%',  Math.floor((100 - p)/100 * 100) + '%'],
                    datasets: [
                        {
                            data: [p, 100 - p],
                            backgroundColor: [
                                "#09a627",
                                "#FF6384"
                            ],
                            hoverBackgroundColor: [
                                "#09a627",
                                "#FF6384"
                            ]
                        }],
                    options: {
                            title: {
                                display: true,
                                text: keyIndicator.indicator,
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
            this.opcoData.push({
                "name" : opco.operationalCompanyName,
                "chart" : pieData,
                "id" : opco.id
            });            
        });

        this.opcoPieData = this.opcoData;
    }

    opcoChange(){
        console.log(this.selectedOpco)
        debugger
        if(this.selectedOpco){
            this.opcoPieData = this.opcoData.filter(x => x.id == this.selectedOpco);
            this.opcoBarDataAll = this.datas.filter(x => x.Id == this.selectedOpco);
        }
        else{
            this.opcoPieData = this.opcoData;
            this.opcoBarDataAll = this.datas;
        }
    }

    getAllProjectKeyIndicatorYear(): ProjectKeyIndicatorYear[] {
        return [
           {
                id: "",
                comment: "",
                keyIndicatorId: "",
                project: new Project(),
                projectId: "",
                updatedBy: "",
                updatedOn: "",
                value: 100,
                year: 2020
            },
            {
                id: "",
                comment: "",
                keyIndicatorId: "",
                project: new Project(),
                projectId: "",
                updatedBy: "",
                updatedOn: "",
                value: 100,
                year: 2020
            },
        ]
    }

    getAllProjectKeyIndicatorMonth(): ProjectKeyIndicator[] {
        return [
            {
                id: "",
                comment: "",
                keyIndicatorId: "",
                project: new Project(),
                projectId: "",
                updatedBy: "",
                updatedOn: "",
                month: 1,
                year: 2020,
                actual: 99,
                keyIndicator: new KeyIndicator 
            },
            {
                id: "",
                comment: "",
                keyIndicatorId: "",
                project: new Project(),
                projectId: "",
                updatedBy: "",
                updatedOn: "",
                month: 1,
                year: 2019,
                actual: 99,
                keyIndicator: new KeyIndicator 
            },
        ]
    }




}