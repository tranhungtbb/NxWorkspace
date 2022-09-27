import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgmCoreModule } from '@agm/core';
import { shellFeatureRoutes, ShellFeatureRoutingRoutes } from './shell-feature-routing.module';

// import { DashBoardFeatureModule } from '@beekin-app/dash-board/feature';




@NgModule({
  imports: [
    CommonModule,
    NgSelectModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBriVbWgmHEE8CGaEJM6V47Bem3VoYCi0Q',
      libraries: ['places'],
    })
  ],
  exports : [
    CommonModule,
    ShellFeatureRoutingRoutes
  ]
})
export class ShellFeatureModule {}
