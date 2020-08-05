import { Component, OnInit } from "@angular/core";
import { ThongTinXuatHang } from "src/app/core/models/thong-tin-xuat-hang.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  thongTinXuatHang: ThongTinXuatHang[] = [
    {
      name: "xi mang 40",
      vehicleCode: "HD202099990",
    },
    {
      name: "xi mang 41",
      vehicleCode: "HD202099991",
    },
    {
      name: "xi mang 42",
      vehicleCode: "code 3",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
