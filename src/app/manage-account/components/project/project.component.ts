import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../shared/services/project.service';
import { OpcoService } from '../../../shared/services/opco.service';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/models/project.model';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ProjectAddUpdateComponent } from './project-add-update/project-add-update.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects$: Observable<Project[]>;

  displayedColumns: string[] = ['position', 'name', 'buttons'];

  constructor(private projectService: ProjectService,
    private opcoService: OpcoService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog) { }

  opcos$ = this.opcoService.getOpcos();

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.projects$ = this.projectService.getProjects();
  }

  onAdd() {
    this.openDialog(new Project)
  }

  // deleteProject(id) {
  //   this.projectService.deleteProject(id).subscribe(
  //     res => {
  //       this.getProject();
  //       console.log(res)
  //     }      
  //   );
  // }

  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "600px";
    dialogConfig.height = "330px";
    dialogConfig.data = data;

    const dialogRef = this.dialog.open(ProjectAddUpdateComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (data.id) {
          result.id = data.id
          this.projectService.updateProject(data.id, result).subscribe(
            {
              next: () => {
                this.snackbarService.snackBar("Project Updated Successfully!!")
                this.getProject();
              },
              error: () => this.snackbarService.snackBar("Error occured while updating project name")
            }
          );
        }
        else {
          this.projectService.postProjects(result).subscribe(
            {
              next: () => {
                this.snackbarService.snackBar("New project added Successfully!!")
                this.getProject();
              },
              error: () => this.snackbarService.snackBar("Error occured while adding project")
            }
          );
        }
      }
    });
  }
}
