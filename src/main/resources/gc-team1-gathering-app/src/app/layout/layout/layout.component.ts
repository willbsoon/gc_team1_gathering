import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  opened = false;

  constructor(
    private router: Router,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;  // 사용여부 체크

  }

  ngOnInit(): void {
  }

}
