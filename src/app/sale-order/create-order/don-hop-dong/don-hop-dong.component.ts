import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Area } from "src/app/core/models/area.model";
import { Mooc } from "src/app/core/models/mooc.model";
import { Contract } from "src/app/core/models/contract.model";

@Component({
  selector: "app-don-hop-dong",
  templateUrl: "./don-hop-dong.component.html",
  styleUrls: ["./don-hop-dong.component.css"],
})
export class DonHopDongComponent implements OnInit {
  hopDong: Contract[] = [
    {
      id: 1,
      contractNumber: "contractNumber 1",
      context: "context 1",
      contractName: "1T/XMBS-XNTT/2020",
    },
    {
      id: 2,
      contractNumber: "contractNumber 1",
      context: "context 1",
      contractName: "2T/XMBS-XNTT/2020",
    },
  ];
  mooc: Mooc[] = [
    {
      id: 1,
      moocCode: "15C-234.56",
      weightLimit: 10,
    },
    {
      id: 2,
      moocCode: "25C-234.56",
      weightLimit: 20,
    },
  ];
  diaBan: Area[] = [
    {
      id: 1,
      code: "code 1",
      level: 1,
      name: "Địa bàn 1",
      province: "province 1",
      district: "district 1",
      commune: "commune 1",
      regionCode: "regionCode 1",
      par_Flag: "par_Flag 1",
      startDate: "2020-08-04T08:05:00.105Z",
      endDate: "2020-08-04T08:05:00.105Z",
      active_Flag: "active_Flag 1",
    },
    {
      id: 2,
      code: "code 2",
      level: 1,
      name: "Địa bàn 2",
      province: "province 1",
      district: "district 1",
      commune: "commune 1",
      regionCode: "regionCode 1",
      par_Flag: "par_Flag 1",
      startDate: "2020-08-04T08:05:00.105Z",
      endDate: "2020-08-04T08:05:00.105Z",
      active_Flag: "active_Flag 1",
    },
  ];
  formHopDong: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formHopDong = this.fb.group({
      description: ["Vận chuyển xi măng rời PC40", Validators.required],
      areaId: ["", Validators.required],
      contractId: ["", Validators.required],
      moocCode: ["", Validators.required],
      orderType: ["Hợp đồng"],
      driverName: ["", Validators.required],
      vehicleCode: ["", Validators.required],
      transportMethodId: ["", Validators.required],
      currencyCode: ["", Validators.required],
      quantity: [0, Validators.required],
      unitPrice: [1000000, Validators.required],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    console.log("1");
  }
}
