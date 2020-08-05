import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ManagementModule } from "./management/management.module";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./shared/layout/layout.module";
import { SaleorderModule } from "./sale-order/saleorder.module";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DecisionModule } from "./decision/decision.module";
import { ReportModule } from "./report/report.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SaleorderModule,
    ReactiveFormsModule,
    ManagementModule,
    DecisionModule,
    ReportModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
