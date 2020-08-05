import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from "@angular/forms";
import { OrderDetail } from "src/app/core/models/order-detail.model";

@Component({
  selector: "app-chitiethoadon",
  templateUrl: "./chitiethoadon.component.html",
  styleUrls: ["./chitiethoadon.component.css"],
})
export class ChitiethoadonComponent implements OnInit {
  @Input() data: any;
  formChiTiet: FormGroup;
  hoaDon: OrderDetail[] = [
    {
      msgh: "",
      orderType: "Hợp đồng",
      vehicle: "VC-1",
      mooc: "Mooc -1",
      soluong: 1,
      ddvt: "TAN",
      dongia: 150000,
      chietkhau: 0,
      giatri: 150000,
      loaitien: "VND",
      tentaixe: "Nguyen van a",
      ghichu: "ghi chu 1",
      sanpham: "xi mang 1",
      loaivobao: "pp",
    },
  ];
  constructor(private fb: FormBuilder) {
    this.formChiTiet = this.fb.group({
      checkArray: this.fb.array([], [Validators.required]),
    });
  }

  ngOnInit(): void {}
  themDong() {
    console.log(this.data);
  }
  xoaDong() {
    console.log(this.formChiTiet.value.checkArray);
    this.formChiTiet.value.checkArray.forEach((element) => {
      let checkArray: FormArray = this.formChiTiet.get(
        "checkArray"
      ) as FormArray;
      checkArray.removeAt(0);
      this.hoaDon.splice(element, 1);
      console.log(this.formChiTiet.value.checkArray);
    });
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.formChiTiet.get(
      "checkArray"
    ) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      const index = checkArray.controls.findIndex(
        (x) => x.value === e.target.value
      );
      checkArray.removeAt(index);
    }
  }
}
