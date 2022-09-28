import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgSelectConfig } from '@ng-select/ng-select';
import { darkTheme, lightTheme, ThemeModule } from '@beekin-app/theme';
import { shellFeatureRoutes } from './shell-feature-routing';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppRootOverlayContainer } from '@beekin-app/share/custom';
import { ShareAppCommonModule } from '@beekin-app/share/app-common';



@NgModule({
  imports: [
    CommonModule,
    ShareAppCommonModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    }),
    RouterModule.forRoot(shellFeatureRoutes,
      {
        scrollPositionRestoration: 'top'
      }
    )
  ],
  declarations: [],
  providers: [
    { 
      provide: OverlayContainer, 
      useClass: AppRootOverlayContainer 
    },
    {
      provide: NgSelectConfig,
      useValue: {
        notFoundText: 'Not found',
        appendTo: 'body',
      }
    }
  ]
})
export class ShellFeatureModule { }

