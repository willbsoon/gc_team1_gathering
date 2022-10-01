import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarModule } from "../../components/bar/bar/bar.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BarModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
