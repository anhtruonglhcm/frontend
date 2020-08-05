import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Mooc } from "src/app/core/models/mooc.model";

@Component({
  selector: "app-don-khuyen-mai",
  templateUrl: "./don-khuyen-mai.component.html",
  styleUrls: ["./don-khuyen-mai.component.css"],
})
export class DonKhuyenMaiComponent implements OnInit {
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
  formKhuyenMai: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formKhuyenMai = this.fb.group({
      name: ["", Validators.required],
      mavung: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
}
