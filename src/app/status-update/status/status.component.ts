import { Component, OnInit } from '@angular/core';
import { StatusUpdateService } from '../services/status-update.service';
import { replaceMonth, replaceMonthBack } from '../../shared/utils.js';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ProjectKeyIndicatorService } from 'src/app/shared/services/projectKeyIndicator.service';
import { ProjectKeyIndicator } from 'src/app/shared/models/projectKeyIndicator.model';
import { KeyIndicatorService } from 'src/app/shared/services/key-indicator.service';
import { KeyIndicator } from 'src/app/shared/models/keyIndicator.model';
import { OpcoService } from 'src/app/shared/services/opco.service';
import { Opco } from 'src/app/shared/models/opco.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  userParjects;
  curryear = new Date().getFullYear()
  currmonth = replaceMonth(new Date().getMonth())
  projectName;
  OpcoName;
  opcos: Opco[];

  

  constructor(private projectKeyIndicatorService: ProjectKeyIndicatorService,
    private keyIndicatorService: KeyIndicatorService,
    private formBuider: FormBuilder,
    private OpcoService: OpcoService) { }




  form: FormGroup;
  questions;
  projectKeyIndicators: ProjectKeyIndicator[];
  keyIndicators: KeyIndicator[];


   get formKeyIndicators(): FormArray{
     return <FormArray>this.statusForm.get('keyIndicators');
   }

  statusForm = this.formBuider.group({
    month: [replaceMonth(new Date().getMonth()) || ''],
    year: [new Date().getFullYear() || ''],
    manager: [''],
  //  keyIndicator:  [''],
   formKeyIndicators: this.formBuider.array([this.buildKeyIndicators()]),
  
  })

  buildKeyIndicators(): FormGroup{
    return this.formBuider.group({
      keyIndicator:  [''],
      monthlyTarget: [''],
      monthlyActual: [''],
      yearlyTarget: ['']
    })
  }

  addKeyIndicator(){
    this.formKeyIndicators.push(this.buildKeyIndicators());
  }


  ngOnInit() {
    this.getProjectKeyIndicatorByYear();
   
    

    this.keyIndicatorService.getKeyIndicators().subscribe(res =>
      this.keyIndicators = res);
    
      this.OpcoService.getOpcos().subscribe(res =>{
        this.opcos = res;
        this.OpcoName = this.opcos.find(x => x.id == this.projectKeyIndicators[0].project.operationalCompanyId).operationalCompanyName;
      })

  }

  getProjectKeyIndicatorByYear(){

  //  this.projectKeyIndicatorService.getProjectKeyIndicatorsByYear("61749256-e040-4d2d-d450-08d753a1e68a", 2019).subscribe(
  //   res =>{
  //     console.log(res);
  //     this.projectKeyIndicators = res;
  //    }
  //  )
  }

  // toFormGroup(questions ) {
  //   let group: any = {};

  //   questions.forEach(question => {
  //     group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
  //                                             : new FormControl(question.value || '');
  //   });
  //   return new FormGroup(group);
  // }

  onSubmit(){
   console.log(this.statusForm.value);
  }
 


  updateProject(selectedProject){
this.onSubmit();
  }
 
}
