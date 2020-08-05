import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomerService } from "src/app/core/services/customer.service";

@Component({
  selector: "app-thongtinkhachhang",
  templateUrl: "./thongtinkhachhang.component.html",
  styleUrls: ["./thongtinkhachhang.component.css"],
})
export class ThongtinkhachhangComponent implements OnInit {
  arrayTest = [
    {
      id: 1,
      name: "name 1",
    },
    {
      id: 2,
      name: "name 2",
    },
  ];
  formThongTinKhachHang: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {
    this.formThongTinKhachHang = this.fb.group({
      name: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
