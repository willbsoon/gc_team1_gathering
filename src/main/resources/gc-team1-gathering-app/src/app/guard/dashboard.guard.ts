import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import { SessionService } from "../service/session/session.service";
// import { getTimelineUrl, handleError } from "../utils";
// import { NavigationService } from "../service/navigation/navigation.service";

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(
    // private sessionService: SessionService,
    // private navigationService: NavigationService,
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // if (this.sessionService.isAuthenticated()) {
    //   const shopIds = this.sessionService.getMe()?.managingShopIds;
    //   const shopId = shopIds && shopIds.length > 0 ? shopIds[0] : undefined;
    //   const primaryShopId = localStorage.getItem('primaryShopId');
    //   if (primaryShopId) {
    //     this.navigationService.popHistory();
    //     this.router.navigate(['/', 'shop', primaryShopId, getTimelineUrl(primaryShopId)], {
    //       replaceUrl: true
    //     })
    //       .catch(error => handleError(error, this.sessionService.getMe()));
    //   } else if (shopId) {
    //     this.navigationService.popHistory();
    //     this.router.navigate(['/', 'shop', shopId, getTimelineUrl(shopId)], {
    //       replaceUrl: true
    //     })
    //       .catch(error => handleError(error, this.sessionService.getMe()));
    //   }
    // } else {
    //   this.navigationService.popHistory();
    //   this.router.navigate(['/', 'login'], {
    //     replaceUrl: true
    //   });
    // }

      this.router.navigate(['/', 'dashboard'], {
        replaceUrl: true
      });
    return false;
  }

}
