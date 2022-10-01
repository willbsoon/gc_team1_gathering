import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AlertDialogOption } from "./alert-dialog-option";

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlertDialogOption,
  ) {
  }

  ok(): void {
    this.dialogRef.close({
      buttonClicked: true,
      confirmed: true
    });
  }

  cancel(): void {
    this.dialogRef.close({
      buttonClicked: true,
      confirmed: false
    });
  }

  close(): void {
    this.dialogRef.close({
      buttonClicked: false,
      confirmed: false
    });
  }

}
