import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { AlertDialogResult } from "./alert-dialog-result";
import { AlertDialogOption } from "./alert-dialog-option";
import { AlertDialogComponent } from "./alert-dialog.component";
import { NavigationService } from "../../service/navigation/navigation.service";

@Injectable()
export class AlertDialogOpener {

  constructor(
    public dialog: MatDialog,
    private navigationService: NavigationService
  ) {
  }

  public open(option: AlertDialogOption): Observable<AlertDialogResult> {
    // 뒤로 가기 지원을 위한 히스토리 상태 추가
    if (!location.href.includes('#alert')) {
      this.navigationService.pushStateAndSave(null, '', location.pathname + location.search + location.hash + '#alert');
    } else {
      //TODO alert 발생시 또 에러가 뜨도록 할것인가?..... 아니면 한가지 에러만 발생하게 할것인가? 에러에 대한 범주도 만들어야할듯.
      // return new Observable<AlertDialogResult>((observer) => {
      //   observer.next(undefined);
      // });
    }
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: option,
      disableClose: true,
      restoreFocus: option.restoreFocus
    });
    return new Observable<AlertDialogResult>((observer) => {
      dialogRef.afterClosed().subscribe((result: AlertDialogResult) => {
        if (result && result.buttonClicked) {
          if (!option.redirect) {
            if (option.backPageNum) {
              this.navigationService.goBack(option.backPageNum);
            } else {
              this.navigationService.goBack(1);
            }
          }

          observer.next(result);
        } else {
          observer.next({
            buttonClicked: false,
            confirmed: false,
          });
        }
      });
    });
  }
}
