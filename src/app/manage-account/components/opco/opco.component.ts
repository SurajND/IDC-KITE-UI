import { Component, OnInit } from '@angular/core';
import { OpcoService } from '../../../shared/services/opco.service';
import { Opco } from 'src/app/shared/models/opco.model';
import { Observable } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { OpcoAddUpdateComponent } from './opco-add-update/opco-add-update.component';

@Component({
  selector: 'app-opco',
  templateUrl: './opco.component.html',
  styleUrls: ['./opco.component.scss']
})
export class OpcoComponent implements OnInit {

  opcos$: Observable<Opco[]>;

  constructor(private opcoService: OpcoService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getOpcos();
  }

  getOpcos() {
    this.opcos$ = this.opcoService.getOpcos();
  }

  addOpco(): void {
    this.openDialog(new Opco());
  }

  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    dialogConfig.height = "250px";
    dialogConfig.data = data;

    const dialogRef = this.dialog.open(OpcoAddUpdateComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.opcoService.updateOpco(result.id, result).subscribe(
            {
              next: () => {
                this.snackbarService.snackBar("Opco Updated Successfully!!")
                this.getOpcos();
              },
              error: () => this.snackbarService.snackBar("Error occured while updating opco name")
            }
          );
        }
        else {
          this.opcoService.postOpco(result).subscribe(
            {
              next: () => {
                this.snackbarService.snackBar("New Opco added Successfully!!")
                this.getOpcos();
              },
              error: () => this.snackbarService.snackBar("Error occured while adding opco")
            }
          );
        }
      }
      else {
        this.getOpcos();
      }
    });
  }
}
