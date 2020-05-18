import { Component, OnInit } from '@angular/core';
import { KeyIndicator } from 'src/app/shared/models/keyIndicator.model';
import { KeyIndicatorService } from '../../../shared/services/key-indicator.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { KeyIndicatorAddUpdateComponent } from './key-indicator-add-update/key-indicator-add-update.component';

@Component({
  selector: 'app-key-indicator',
  templateUrl: './key-indicator.component.html',
  styleUrls: ['./key-indicator.component.scss']
})
export class KeyIndicatorComponent implements OnInit {

  newKeyIndicatorName: string;
  keyIndicator: KeyIndicator;
  keyIndicators$: Observable<KeyIndicator[]>;
  selectedKeyIndicator: KeyIndicator;
  editable = false;
  private destroy$: Subject<boolean> = new Subject();

  constructor(private keyIndicatorService: KeyIndicatorService,
    private snackbarService: SnackbarService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getKeyIndicators();
  }

  getKeyIndicators() {
    this.keyIndicators$ = this.keyIndicatorService.getKeyIndicators()

  }

  addKeyIndicator(newKeyIndicatorName) {
    this.openDialog(new KeyIndicator())
    this.keyIndicator = {
      indicator: newKeyIndicatorName
    }
    //this.keyIndicator.indicator = newKeyIndicatorName;
    console.log(this.keyIndicator);
    this.keyIndicatorService.postKeyIndicator(this.keyIndicator).subscribe(
      res => {
        console.log(res)
        this.getKeyIndicators();
      }
    )

  }

  onEdit(keyIndicator) {
    this.editable = true;
    this.selectedKeyIndicator = keyIndicator;
  }

  updateProject(selectedKeyIndicator) {
    this.keyIndicator = {
      id: selectedKeyIndicator.id,
      indicator: selectedKeyIndicator.indicator
    }

    this.keyIndicatorService.updateKeyIndicator(selectedKeyIndicator.id, this.keyIndicator).subscribe(
      res => console.log(res)
    )
  }



  openDialog(data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    dialogConfig.height = "250px";
    dialogConfig.data = data;

    const dialogRef = this.dialog.open(KeyIndicatorAddUpdateComponent,
      dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.id) {
          this.keyIndicatorService.updateKeyIndicator(result.id, result).subscribe(
            {
              next: () => {
                this.snackbarService.snackBar("Key indicator Updated Successfully!!")
                this.getKeyIndicators();
              },
              error: () => this.snackbarService.snackBar("Error occured while updating key indicator")
            }
          );
        }
        else {
          this.keyIndicatorService.postKeyIndicator(result).subscribe(
            {
              next: () => {
                this.snackbarService.snackBar("New Key indicator added Successfully!!")
                this.getKeyIndicators();
              },
              error: () => this.snackbarService.snackBar("Error occured while adding key indicator")
            }
          );
        }
      }
      else {
        this.getKeyIndicators();
      }
    });
  }
}
