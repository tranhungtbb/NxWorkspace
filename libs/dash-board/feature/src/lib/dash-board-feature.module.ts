import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardFeatureComponent } from './dash-board-feature.component';

export const dashBoardFeatureRoutes: Routes = [
  {
    path: '',
    component: DashBoardFeatureComponent
  }
]

@NgModule({
  declarations: [DashBoardFeatureComponent],
  imports: [CommonModule, RouterModule.forChild(dashBoardFeatureRoutes)],

})
export class DashBoardFeatureModule { }
