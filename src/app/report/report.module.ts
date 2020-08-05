import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { PeriodicDebtComponent } from './periodic-debt/periodic-debt.component';
import { LiabilitiesComponent } from './liabilities/liabilities.component';


@NgModule({
  declarations: [PeriodicDebtComponent, LiabilitiesComponent],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
