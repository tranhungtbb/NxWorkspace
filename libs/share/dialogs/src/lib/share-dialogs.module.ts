import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAssignOperatorComponent } from './dialog-assign-operator/dialog-assign-operator.component';
import { DialogClientResponseComponent } from './dialog-client-response/dialog-client-response.component';
import { DialogNoteComponent } from './dialog-note/dialog-note.component';
import { DialogViewRepondentsComponent } from './dialog-view-repondents/dialog-view-repondents.component';

@NgModule({
  declarations : [DialogAssignOperatorComponent, DialogClientResponseComponent, DialogNoteComponent, DialogViewRepondentsComponent],
  imports: [CommonModule],
  exports : [DialogAssignOperatorComponent, DialogClientResponseComponent, DialogNoteComponent, DialogViewRepondentsComponent]
})
export class ShareDialogsModule {}
