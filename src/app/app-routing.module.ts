import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./sale-order/saleorder-routing.module").then(
        (m) => m.SaleOrderRoutingModule
      ),
  },
  {
    path: "management",
    loadChildren: () =>
      import("./management/management-routing.module").then(
        (m) => m.ManagementRoutingModule
      ),
  },
  {
    path: "decision",
    loadChildren: () =>
      import("./decision/decision-routing.module").then(
        (m) => m.DecisionRoutingModule
      ),
  },
  {
    path: "report",
    loadChildren: () =>
      import("./report/report-routing.module").then(
        (m) => m.ReportRoutingModule
      ),
  },
  {
    path: "**",
    redirectTo: "/dashboard",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
