import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Opco } from 'src/app/shared/models/opco.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-opco-add-update',
  templateUrl: './opco-add-update.component.html',
  styleUrls: ['./opco-add-update.component.scss']
})
export class OpcoAddUpdateComponent implements OnInit {

  operationalCompanyName = new FormControl('', [Validators.required, Validators.minLength(2)]);

  constructor(public dialogRef: MatDialogRef<OpcoAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public opco: Opco) { }

  ngOnInit() {
  
  }

  getErrorMessage() {
    return this.operationalCompanyName.hasError('required') ? 'You must enter a value' :
        this.operationalCompanyName.hasError('minlength') ? 'Opco name must have at least 2 character' :
            '';
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
