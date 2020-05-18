import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { KeyIndicator } from 'src/app/shared/models/keyIndicator.model';

@Component({
  selector: 'app-key-indicator-add-update',
  templateUrl: './key-indicator-add-update.component.html',
  styleUrls: ['./key-indicator-add-update.component.scss']
})
export class KeyIndicatorAddUpdateComponent implements OnInit {

  indicator = new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor(public dialogRef: MatDialogRef<KeyIndicatorAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: KeyIndicator) { }

  ngOnInit() {
  
  }

  getErrorMessage() {
    return this.indicator.hasError('required') ? 'You must enter a value' :
        this.indicator.hasError('minlength') ? 'Key Indicator name must have at least 2 character' :
            '';
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
