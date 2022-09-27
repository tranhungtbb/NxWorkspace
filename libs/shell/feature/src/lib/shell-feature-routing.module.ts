import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from '@beekin-app/shell/ui/layout'
import { HeaderComponent } from '@beekin-app/shell/ui/header';
import { NgModule } from '@angular/core';

export const shellFeatureRoutes: Routes = [
  {
    path : '',
    component : HeaderComponent,
    // children : 
    // [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     component : HeaderComponent,
    //   },
    //   {
    //     path: 'client',
    //     loadChildren: async () => (await import('@beekin-app/dash-board/feature')).DashBoardFeatureModule,
    //   },
    //   {
    //     path: 'case-active',
    //     loadChildren: async () => (await import('@beekin-app/dash-board/feature')).DashBoardFeatureModule,
    //   },
    //   {
    //     path: 'client',
    //     loadChildren: async () => (await import('@beekin-app/dash-board/feature')).DashBoardFeatureModule,
    //   }
    // ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(shellFeatureRoutes)],
  exports: [RouterModule]
})
export class ShellFeatureRoutingRoutes { }