import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './statistic/statistic.component';
import { MaterialModule } from '@beekin-app/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [StatisticComponent],
  exports : [StatisticComponent]
})
export class DashBoardUiStatisticModule {}
