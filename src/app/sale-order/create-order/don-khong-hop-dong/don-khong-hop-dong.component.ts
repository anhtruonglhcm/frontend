import { Component, OnInit } from "@angular/core";
import { FormGroup, Form, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-don-khong-hop-dong",
  templateUrl: "./don-khong-hop-dong.component.html",
  styleUrls: ["./don-khong-hop-dong.component.css"],
})
export class DonKhongHopDongComponent implements OnInit {
  formKhongHopDong: FormGroup;
  type = [
    { id: 1, name: "ban le" },
    { id: 2, name: "ban buon" },
  ];
  constructor(private fb: FormBuilder) {
    this.formKhongHopDong = this.fb.group({
      type: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
}
