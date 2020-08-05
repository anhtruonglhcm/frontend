import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { ListOrderComponent } from "./list-order/list-order.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },
  {
    path: "create-order",
    component: CreateOrderComponent,
  },
  {
    path: "list-order",
    component: ListOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleOrderRoutingModule {}
