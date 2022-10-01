import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./layout/layout/layout.component";
import { DashboardModule } from "./contents/dashboard/dashboard.module";
import { DashboardGuard } from "./guard/dashboard.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      {
        path: '',
        // redirectTo: 'dashboard',
        pathMatch: 'full',
        component: DashboardModule,
        canActivate: [
          DashboardGuard
        ],
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./contents/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '**',
        // redirectTo: '/dashboard',
        pathMatch: 'full',
        component: DashboardModule,
        canActivate: [
          DashboardGuard
        ],
      }
    ]
  },
  {
    path: '**',
    // redirectTo: '/dashboard',
    pathMatch: 'full',
    component: DashboardModule,
    canActivate: [
      DashboardGuard
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
