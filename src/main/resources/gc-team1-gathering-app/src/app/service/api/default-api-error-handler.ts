import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Router } from '@angular/router';
import { ApiError } from "../../types/api-error";
import { isNil } from 'lodash-es';
import { AlertDialogOpener } from "../../dialog/alert-dialog/alert-dialog-opener.service";
import { ShopVo } from "../../types/shop-vo";
import { TeepeeUserVo } from "../../types/teepee-user-vo";
import * as moment from "moment";
import { LoginRequest } from "../session/login-request";
import { SessionService } from "../session/session.service";

export class DefaultApiErrorHandler {
  errorType: 'CLIENT' | 'AUTHENTICATION' | 'BAD_REQUEST' | 'NETWORK' | 'SERVER' = 'SERVER';
  error: ApiError;

  constructor(
    private router: Router,
    public errorResponse: HttpErrorResponse,
    private alertDialogOpener: AlertDialogOpener,
    private httpClient: HttpClient,
  ) {
    this.error = errorResponse.error; // html body
    // @ts-ignore
    if (this.error?.error) { // api result 로 래핑된 body 일 경우 error 프로퍼티 추출
      // @ts-ignore
      this.error = this.error.error;
    }

  }

  isStandardError(): boolean {
    return !isNil(this.error?.resultCode) && typeof this.error?.resultCode === 'string';
  }

  parseError() {
    // 브라우저에서 발생한 오류인지 확인
    if (this.error instanceof Error) {
      this.errorType = 'CLIENT';
      return;
    }

    // 서버에서 오류가 난 경우

    if (this.isStandardError()) {
      // TODO error status 로 적절한 서버 에러를 찾아야한다.
      if (this.errorResponse.status >= 500) {
        this.errorType = 'SERVER';
      } else if (this.errorResponse.status >= 400) {
        this.errorType = 'BAD_REQUEST';
      } else if (this.errorResponse.status >= 300) {
        // skip
      } else if (this.errorResponse.status >= 200) {
        this.errorType = 'AUTHENTICATION';
      } else {
        // @ts-ignore
        this.errorType = this.error.type;
      }
      return;
    }

    // Bad Request 경우: httStatus 가 400
    if (this.errorResponse.status === 400 || this.errorResponse.status === 401 || this.errorResponse.status === 405 || this.errorResponse.status === 406) {
      this.errorType = 'BAD_REQUEST';
      if (!this.error) {
        this.error = {
          resultCode: 'unspecified bad request',
          displayMessage: 'Bad Request'
        };
      }
      return;
    }

    if (this.errorResponse.status === 0 || this.errorResponse.status === 503 || this.errorResponse.status === 504) {
      this.errorType = 'NETWORK';
      if (!this.error) {
        this.error = {
          resultCode: 'CLIENT-502', // TODO 임의로 에러 코드를 정함
          displayMessage: 'Server connection failed. Please try again.'
        };
      }
      return;
    }

    // 그 외 모든 오류는 서버 오류로 처리
    this.errorType = 'SERVER';
  }

  handle(error?: DefaultApiErrorHandler, me?: TeepeeUserVo, sessionService?: SessionService) {
    // TODO 중복 호출 방지
    this.parseError();
    if (this.errorType === 'AUTHENTICATION') {
      // if(this.error.code === -20004) {
      //   this.showAlert(this.error.message, 'Bad Request');
      // } else {
      //   this.router.navigate(['/auth', 'login']);
      document.location.href = "/api/auth/login";
      // }
    } else if (this.errorType === 'BAD_REQUEST') {
      // Unauthorized. 서버에서 로그아웃 처리가 되었으므로 브라우저에서도 동일하게 로그아웃처리
      if (this.error.resultCode === '401') {

        if (localStorage.getItem('loginIdForAutoLogin')) {
          try {
            // @ts-ignore
            window.flutter_inappwebview.callHandler('loginHandler', localStorage.getItem('loginIdForAutoLogin'))
              .then((result: any) => {

                const {loginId, password} = result;

                const loginRequest: LoginRequest = {
                  userId: loginId,
                  passwordEnc: password,
                  keepLogin: true,
                  loginComponent: 'WEB',
                }
                sessionService!.login(loginRequest).then(user => {
                  try {
                    const appLoginInfo = {
                      loginId: loginId!,
                      password: password!,
                    }
                    // @ts-ignore
                    window.flutter_inappwebview.callHandler('saveLoginInfoHandler', JSON.stringify(appLoginInfo))
                      .then((result: any) => {
                        console.log(result);
                      });

                  } catch (e) {
                    this.alertExpired();
                    console.error(e);
                  }
                });

              })
              .catch((e: any) => {
                this.alertExpired();
                console.error(e);
              });
          } catch (e) {
            this.alertExpired();
            console.error(e);
          }
          return;
        } else {
          this.alertExpired();
        }


      } else {
        this.showAlert(this.error.displayMessage || this.error.rawMessage || this.error.resultCode || this.errorType, 'Bad Request');
      }

    } else if (this.errorType === 'CLIENT') {
      this.showAlert(this.error.displayMessage || this.error.rawMessage || this.error.resultCode || this.errorType, 'Client Error');
    } else {

      // @ts-ignore
      if (this.error === 'Forbidden') {

        if (localStorage.getItem('loginIdForAutoLogin')) {
          try {
            // @ts-ignore
            window.flutter_inappwebview.callHandler('loginHandler', localStorage.getItem('loginIdForAutoLogin'))
              .then((result: any) => {

                const {loginId, password} = result;

                const loginRequest: LoginRequest = {
                  userId: loginId,
                  passwordEnc: password,
                  keepLogin: true,
                  loginComponent: 'WEB',
                }

                sessionService!.login(loginRequest).then(user => {
                  try {
                    const appLoginInfo = {
                      loginId: loginId!,
                      password: password!,
                    }
                    // @ts-ignore
                    window.flutter_inappwebview.callHandler('saveLoginInfoHandler', JSON.stringify(appLoginInfo))
                      .then((result: any) => {
                        console.log(result);
                      });
                  } catch (e) {
                    this.alertExpired();
                    console.error(e);
                  }
                });
              })
              .catch((e: any) => {
                this.alertExpired();
                console.error(e);
              });
          } catch (e) {
            this.alertExpired();
            console.error(e);
          }
          return;
        } else {
          this.alertExpired();
        }


      } else {
        this.alertDialogOpener.open({
          content: '예기치 못한 오류가 발생했습니다. 로그인 페이지로 이동합니다.\n동일한 오류가 지속적으로 발생할 경우 담당자에게 문의 바랍니다.',
          okString: '확인',
        }).subscribe(() => {
          localStorage.removeItem('me');
          localStorage.removeItem('userAuth');
          window.location.reload();
        });
        console.error('apiError:', this.error);
      }
    }
    this.sendError(this.error, me);
  }

  showAlert(message: string, title?: string) {
    // TODO alert
    // alert(`[${title}] ${message}`);
    console.error(`[${title}] ${message}`);
  }

  alertExpired() {
    this.alertDialogOpener.open({
      content: '세션 허용 시간이 만료 되었습니다.\n매장 정보 보호를 위해 다시 한번 로그인 해주세요.',
      okString: '확인',
    }).subscribe(() => {
      localStorage.removeItem('me');
      localStorage.removeItem('userAuth');
      window.location.reload();
    });
  }

  sendError(error: any, me?: TeepeeUserVo) {

    const webHook: string = 'https://hooks.slack.com/services/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';
    const options = {
      headers: new HttpHeaders(
        {'Content-Type': 'application/x-www-form-urlencoded'}
      )
    };

    let shop: ShopVo | undefined;
    if (me) {
      let shopId = me.managingShopIds.find(id => {
        return window.location.href.includes(id);
      });
      shop = shopId ? me.managingShops.find(shop => shop.shopId === shopId) : undefined;
    }
    const errType = error
      ? error.displayMessage || error.rawMessage || error.resultCode || this.errorType
      : this.errorType || 'undefined server error';
    const now = new Date();
    const message = {
      channel: '#모바일에러로그수집',
      text: 'ERROR! ' + errType,
      attachments: [
        {
          color: 'danger',
          fields: [
            {
              title: "TIME",
              value: `${moment(now).utcOffset(9).format("yyyy-MM-DDTHH:mm:ss")} (${now.getTime()})`,
              short: false
            }, {
              title: "URL",
              value: window.location.href,
              short: false
            }, {
              title: "ISSUER",
              value: (me ? `${me.name} (seq:${me.userSeq}/운영매장:[${me.managingShops.map(shop => shop.shopName).join(',')}])` : `unknown`),
              short: false
            }, {
              title: "ISSUE_SHOP",
              value: '매장: ' + (shop ? `${shop.shopName}` : `unknown`),
              short: false
            }, {
              title: "API_HISTORY",
              value: localStorage.getItem('apiHistories') || 'no histories',
              short: false
            }, {
              title: "RAW_ERROR_RESPONSE",
              value: sessionStorage.getItem('errResponse') || 'no detail',
              short: false
            },
          ]
        }
      ]
    };
    if (
      (
        (!sessionStorage.getItem('errType') || sessionStorage.getItem('errType') !== errType)
        ||
        (!sessionStorage.getItem('sendTime') || now.getTime() - parseInt(sessionStorage.getItem('sendTime')!) > 3600)
      )
      &&
      location.origin === 'https://m.teepee.kr'     // production 에서만 받기.
    ) {
      sessionStorage.setItem('errType', errType);
      sessionStorage.setItem('sendTime', String(now.getTime()));
      this.httpClient.post(webHook, message, options).subscribe();
    }
  }
}
