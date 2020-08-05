import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../models/customer.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.URL_API}customer/contract`);
  }
}
