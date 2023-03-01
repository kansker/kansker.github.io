import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtEchartRoutingModule } from './crt-echart-routing.module';
import { CrtEchartComponent } from './crt-echart.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {SharedModule} from '../../../../theme/shared/shared.module';
import * as echarts from 'echarts';

@NgModule({
  imports: [
    CommonModule,
    CrtEchartRoutingModule,
    SharedModule,
    NgxEchartsModule
  ],
  declarations: [CrtEchartComponent]
})
export class CrtEchartModule { }
