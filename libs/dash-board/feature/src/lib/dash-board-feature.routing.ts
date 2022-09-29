import { Routes } from "@angular/router";
import { DashBoardFeatureComponent } from "./dash-board-feature.component";
import { ListOfCaseComponent } from "./list-of-case/list-of-case.component";
import { MapOnlyComponent } from "./map-only/map-only.component";

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