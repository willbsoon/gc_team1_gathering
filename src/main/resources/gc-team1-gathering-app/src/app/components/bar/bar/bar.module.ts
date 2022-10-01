import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressBarModule } from "@angular/material/progress-bar";



@NgModule({
    declarations: [
        BarComponent
    ],
    exports: [
        BarComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatProgressBarModule
  ]
})
export class BarModule { }
