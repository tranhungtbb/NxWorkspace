import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@beekin-app/material';
import { ShareAppCommonModule } from '@beekin-app/share/app-common'
import { ShareCustomModule } from '@beekin-app/share/custom'

import { DashBoardFeatureComponent } from './dash-board-feature.component';
import { MapOnlyComponent } from './map-only/map-only.component';
import { ListOfCaseComponent } from './list-of-case/list-of-case.component';
import { dashBoardFeatureRoutes } from './dash-board-feature.routing';
@NgModule({
  declarations: [DashBoardFeatureComponent , MapOnlyComponent, ListOfCaseComponent],
  imports: [CommonModule, RouterModule.forChild(dashBoardFeatureRoutes), MaterialModule, ShareAppCommonModule, ShareCustomModule ],
  exports : []

})
export class DashBoardFeatureModule { }
