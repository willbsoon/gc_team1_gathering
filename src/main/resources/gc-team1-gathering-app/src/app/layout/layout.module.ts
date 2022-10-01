import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { BarModule } from "../components/bar/bar/bar.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";
import { SideBarModule } from "../components/bar/side-bar/side-bar.module";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    BarModule,
    MatSidenavModule,
    RouterModule,
    SideBarModule,

  ]
})
export class LayoutModule { }
