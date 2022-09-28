import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@beekin-app/material';
import { ShareAppCommonModule } from '@beekin-app/share/app-common'

import { DashBoardFeatureComponent } from './dash-board-feature.component';
import { MapOnlyComponent } from './map-only/map-only.component';
import { ListOfCaseComponent } from './list-of-case/list-of-case.component';

export const dashBoardFeatureRoutes: Routes = [
  {
    path: '',
    component: DashBoardFeatureComponent,

    children : [
      {
        path : 'map-only',
        component : MapOnlyComponent
      },
      {
        path : 'list-of-case',
        component : ListOfCaseComponent
      }
    ]

  }
]

@NgModule({
  declarations: [DashBoardFeatureComponent , MapOnlyComponent, ListOfCaseComponent],
  imports: [CommonModule, RouterModule.forChild(dashBoardFeatureRoutes), MaterialModule, ShareAppCommonModule ],
  exports : []

})
export class DashBoardFeatureModule { }
