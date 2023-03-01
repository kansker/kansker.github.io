import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'statistic',
        loadChildren: () => import('./wget-statistic/wget-statistic.module').then(m => m.WgetStatisticModule)
      },
      {
        path: 'data',
        loadChildren: () => import('./wget-data/wget-data.module').then(m => m.WgetDataModule)
      },
      {
        path: 'chart',
        loadChildren: () => import('./wget-charts/wget-charts.module').then(m => m.WgetChartsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetRoutingModule { }
