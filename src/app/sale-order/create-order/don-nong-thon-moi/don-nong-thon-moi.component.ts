import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-don-nong-thon-moi",
  templateUrl: "./don-nong-thon-moi.component.html",
  styleUrls: ["./don-nong-thon-moi.component.css"],
})
export class DonNongThonMoiComponent implements OnInit {
  formNongThon: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formNongThon = this.fb.group({
      name: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
}
