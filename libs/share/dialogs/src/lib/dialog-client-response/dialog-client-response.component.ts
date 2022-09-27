import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-client-response',
  templateUrl: './dialog-client-response.component.html',
  styleUrls: ['./dialog-client-response.component.scss']
})
export class DialogClientResponseComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogClientResponseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

}
