import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { SaleOrderRoutingModule } from "./saleorder-routing.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateOrderComponent } from "./create-order/create-order.component";
import { ListOrderComponent } from "./list-order/list-order.component";
import { ThongtinkhachhangComponent } from "./create-order/thongtinkhachhang/thongtinkhachhang.component";
import { ChitiethoadonComponent } from "./create-order/chitiethoadon/chitiethoadon.component";
import { DonHopDongComponent } from "./create-order/don-hop-dong/don-hop-dong.component";
import { DonNongThonMoiComponent } from "./create-order/don-nong-thon-moi/don-nong-thon-moi.component";
import { DonKhuyenMaiComponent } from "./create-order/don-khuyen-mai/don-khuyen-mai.component";
import { DonKhongHopDongComponent } from "./create-order/don-khong-hop-dong/don-khong-hop-dong.component";
import { BieuDoSanLuongComponent } from "./dashboard/bieu-do-san-luong/bieu-do-san-luong.component";
import { BieuDoDongTienComponent } from "./dashboard/bieu-do-dong-tien/bieu-do-dong-tien.component";

const componentArray = [
  DashboardComponent,
  CreateOrderComponent,
  ListOrderComponent,
  ThongtinkhachhangComponent,
  ChitiethoadonComponent,
  DonHopDongComponent,
  DonNongThonMoiComponent,
  DonKhuyenMaiComponent,
  DonKhongHopDongComponent,
  BieuDoSanLuongComponent,
  BieuDoDongTienComponent,
];

@NgModule({
  declarations: [...componentArray],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SaleOrderRoutingModule,
  ],
  // exports: [...componentArray],
})
export class SaleorderModule {}
