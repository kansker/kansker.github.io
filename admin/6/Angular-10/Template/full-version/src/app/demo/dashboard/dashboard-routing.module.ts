import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'analytics',
        loadChildren: () => import('./dash-analytics/dash-analytics.module').then(m => m.DashAnalyticsModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('./dash-sale/dash-sale.module').then(m => m.DashSaleModule)
      },
      {
        path: 'project',
        loadChildren: () => import('./dash-project/dash-project.module').then(m => m.DashProjectModule)
      },
      {
        path: 'help-desk',
        loadChildren: () => import('./dash-help-desk/dash-help-desk.module').then(m => m.DashHelpDeskModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
