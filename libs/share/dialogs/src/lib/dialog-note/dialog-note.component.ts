import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ACTION_COMMON } from 'src/app/constants/common';

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.scss']
})
export class DialogNoteComponent {

  action: string

  constructor(
    public dialogRef: MatDialogRef<DialogNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.action = data?.action
    console.log('data', data)
  }

  onSave() {
    if (this.action == ACTION_COMMON.ADD) {

    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
