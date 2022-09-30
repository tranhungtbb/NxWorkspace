import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashBoardFeatureComponent } from './dash-board-feature.component';
import { MapOnlyComponent } from './map-only/map-only.component';
import { ListOfCaseComponent } from './list-of-case/list-of-case.component';
import { dashBoardFeatureRoutes } from './dash-board-feature.routing';
import { DashBoardUiCaseListModule } from '@beekin-app/dash-board/ui/case-list';
import { DashBoardUiStatisticModule } from '@beekin-app/dash-board/ui/statistic';
import { DashBoardUiCaseActiveMapModule } from '@beekin-app/dash-board/ui/case-active-map';
import { DashBoardMainComponent } from './dash-board-main/dash-board-main.component';

@NgModule({
  declarations: [
    DashBoardFeatureComponent,
    MapOnlyComponent,
    ListOfCaseComponent,
    DashBoardMainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(dashBoardFeatureRoutes),
    DashBoardUiCaseListModule,
    DashBoardUiStatisticModule,
    DashBoardUiCaseActiveMapModule,
  ],
  exports: [],
})
export class DashBoardFeatureModule {}
