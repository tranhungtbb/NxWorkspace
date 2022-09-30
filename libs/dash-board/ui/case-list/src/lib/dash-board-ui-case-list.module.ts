import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseListComponent } from './case-list/case-list.component';
import { MaterialModule } from '@beekin-app/material';
import { ShareAppCommonModule } from '@beekin-app/share/app-common';
import { ShareCustomModule } from '@beekin-app/share/custom'

@NgModule({
  imports: [CommonModule, MaterialModule,ShareAppCommonModule, ShareCustomModule ],
  declarations: [CaseListComponent],
  exports : [CaseListComponent]
})
export class DashBoardUiCaseListModule {}
