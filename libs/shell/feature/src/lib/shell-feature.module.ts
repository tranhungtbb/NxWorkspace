import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';

// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgmCoreModule } from '@agm/core';
import { ShellUiMenuModule } from '@beekin-app/shell/ui/menu';
import { WebLayoutComponent } from '@beekin-app/shell/ui/layout';
import { HeaderComponent } from '@beekin-app/shell/ui/header';

import { DashBoardFeatureModule } from '@beekin-app/dash-board/feature';
import { shellFeatureRoutes, ShellFeatureRoutingRoutes } from './shell-feature-routing.module';



@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    ShellUiMenuModule,
    DashBoardFeatureModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBriVbWgmHEE8CGaEJM6V47Bem3VoYCi0Q',
      libraries: ['places'],
    }),
    RouterModule.forRoot(shellFeatureRoutes),
  ],
  declarations: [],
  exports: [CommonModule, RouterModule]
})
export class ShellFeatureModule { }

