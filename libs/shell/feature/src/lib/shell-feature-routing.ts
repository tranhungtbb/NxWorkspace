import { Routes } from '@angular/router';
import { WebLayoutComponent } from '@beekin-app/shell/ui/layout';

export const shellFeatureRoutes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children:
      [
        {
          path: '',
          loadChildren: async () => (await import('@beekin-app/dash-board/feature')).DashBoardFeatureModule,
        },
        {
          path: 'client',
          loadChildren: async () => (await import('@beekin-app/dash-board/feature')).DashBoardFeatureModule,
        },
        {
          path: 'case-active',
          loadChildren: async () => (await import('@beekin-app/dash-board/feature')).DashBoardFeatureModule,
        },
        {
          path: 'client',
          loadChildren: async () => (await import('@beekin-app/dash-board/feature')).DashBoardFeatureModule,
        }
      ]
  }
];