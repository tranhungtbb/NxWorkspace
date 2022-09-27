import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-assign-operator',
  templateUrl: './dialog-assign-operator.component.html',
  styleUrls: ['./dialog-assign-operator.component.scss']
})
export class DialogAssignOperatorComponent {

  listOperator = [
    { value: 1, text: 'Police Confirmed 1' },
    { value: 2, text: 'Police Confirmed 2' }
  ]

  constructor(
    public dialogRef: MatDialogRef<DialogAssignOperatorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onSave() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
