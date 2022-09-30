import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@beekin-app/material';
import { ShareAppCommonModule } from '@beekin-app/share/app-common';
import { CaseActiveMapComponent } from './case-active-map/case-active-map.component';

@NgModule({
  imports: [CommonModule , MaterialModule, ShareAppCommonModule],
  declarations: [CaseActiveMapComponent],
  exports : [CaseActiveMapComponent]
})
export class DashBoardUiCaseActiveMapModule {}
