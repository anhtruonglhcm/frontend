import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeriodicDebtComponent } from "./periodic-debt/periodic-debt.component";
import { LiabilitiesComponent } from "./liabilities/liabilities.component";

const routes: Routes = [
  {
    path: "periodic-debt",
    component: PeriodicDebtComponent,
  },
  {
    path: "liabilities",
    component: LiabilitiesComponent,
  },
  {
    path: "**",
    redirectTo: "periodic-debt",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
