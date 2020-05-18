import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProjectAddUpdateComponent } from '../../project/project-add-update/project-add-update.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/shared/models/user.model';
import { OpcoService } from 'src/app/shared/services/opco.service';
import { RoleService } from 'src/app/shared/services/role.service';
import { ProjectService } from 'src/app/shared/services/project.service';

@Component({
  selector: 'app-user-add-update',
  templateUrl: './user-add-update.component.html',
  styleUrls: ['./user-add-update.component.scss']
})
export class UserAddUpdateComponent implements OnInit {

  selectedRole;

  userForm = this.fb.group({
    fName: ['', Validators.required],
    lName: [''],
    phoneNumber: [''],
    email: [''],
    projectId: [''],
    roleId: ['', Validators.required],
    operationalCompanyId: [''],
    isActive: ['']
  });

  opcos$  = this.opcoService.getOpcos();
  projects$ = this.projectService.getProjects();
  roles$ = this.roleService.getRoles();

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProjectAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User,
    private opcoService: OpcoService,
    private roleService: RoleService,
    private projectService: ProjectService) { 

      if(user.id){
        this.userForm.patchValue(
          user
           
        );
      }
    }

  ngOnInit() {
   
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
