import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagementRoutingModule } from "./management-routing.module";
import { ShipPointComponent } from './ship-point/ship-point.component';
import { AreaComponent } from './area/area.component';
import { AreaSupplierComponent } from './area-supplier/area-supplier.component';
import { AreaSupplierFormComponent } from './area-supplier-form/area-supplier-form.component';
import { ShipPointFormComponent } from './ship-point-form/ship-point-form.component';
import { AreaFormComponent } from './area-form/area-form.component';
import { DeliveryNetworkComponent } from './delivery-network/delivery-network.component';

@NgModule({
  declarations: [ShipPointComponent, AreaComponent, AreaSupplierComponent, AreaSupplierFormComponent, ShipPointFormComponent, AreaFormComponent, DeliveryNetworkComponent],
  imports: [CommonModule, ManagementRoutingModule],
})
export class ManagementModule {}
