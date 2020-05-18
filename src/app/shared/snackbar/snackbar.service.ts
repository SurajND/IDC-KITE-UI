import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor( private _snackBar: MatSnackBar) { }

  snackBar(message) {
    this._snackBar.open(message, "OK", {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar']
    });
  }
}
