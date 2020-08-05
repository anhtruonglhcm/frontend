import { Component, OnInit } from "@angular/core";
import { fromEvent } from "rxjs";

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"],
})
export class CreateOrderComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
  getElement() {
    let element = document.querySelector(".tab-pane.active");
    console.log(element);
  }
}
