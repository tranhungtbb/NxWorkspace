import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-view-repondents',
  templateUrl: './dialog-view-repondents.component.html',
  styleUrls: ['./dialog-view-repondents.component.scss']
})
export class DialogViewRepondentsComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogViewRepondentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

}
