import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from 'src/app/shared/models/project.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OpcoService } from 'src/app/shared/services/opco.service';

@Component({
  selector: 'app-project-add-update',
  templateUrl: './project-add-update.component.html',
  styleUrls: ['./project-add-update.component.scss']
})
export class ProjectAddUpdateComponent implements OnInit {

  projectForm = new FormGroup({
    projectName: new FormControl('',
      [
        Validators.required,
        Validators.minLength(2)
      ]),
      operationalCompanyId: new FormControl('',
      [
        Validators.required
      ]),
  });

  opcos$  = this.opcoService.getOpcos();

  constructor(public dialogRef: MatDialogRef<ProjectAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public project: Project,
    private opcoService: OpcoService,
    ) {
      if(project.id){
        this.projectForm.patchValue(project);
      }
 
     }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
