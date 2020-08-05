import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShipPointComponent } from "./ship-point/ship-point.component";
import { AreaComponent } from "./area/area.component";
import { AreaSupplierComponent } from "./area-supplier/area-supplier.component";
import { AreaSupplierFormComponent } from "./area-supplier-form/area-supplier-form.component";
import { ShipPointFormComponent } from "./ship-point-form/ship-point-form.component";
import { AreaFormComponent } from "./area-form/area-form.component";
import { DeliveryNetworkComponent } from "./delivery-network/delivery-network.component";

const routes: Routes = [
  {
    path: "ship-point",
    component: ShipPointComponent,
  },
  {
    path: "ship-point/create",
    component: ShipPointFormComponent,
  },
  {
    path: "area",
    component: AreaComponent,
  },
  {
    path: "area/create",
    component: AreaFormComponent,
  },
  {
    path: "area-supplier",
    component: AreaSupplierComponent,
  },
  {
    path: "delivery-network",
    component: DeliveryNetworkComponent,
  },
  {
    path: "area-supplier/create",
    component: AreaSupplierFormComponent,
  },
  {
    path: "**",
    redirectTo: "ship-point",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagementRoutingModule {}
