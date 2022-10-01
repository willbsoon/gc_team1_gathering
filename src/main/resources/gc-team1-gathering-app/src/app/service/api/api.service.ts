import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaders,
  HttpParameterCodec,
  HttpParams
} from "@angular/common/http";
import { Router } from "@angular/router";
import { forEach } from 'lodash-es';

import { ApiResponse } from "../../types/api-response";
import { environment } from "../../../environments/environment";
import { DefaultApiErrorHandler } from './default-api-error-handler';
import { VERSION } from "../../../environments/version";
import { AlertDialogOpener } from "../../dialog/alert-dialog/alert-dialog-opener.service";
import { format } from "date-fns";

const apiBaseUrl = environment.apiBaseUrl;

// see https://angular.io/guide/http

export class CustomURLEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(key: string): string {
    return encodeURIComponent(key);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(key: string) {
    return decodeURIComponent(key);
  }
}

// see https://angular.io/guide/http
export function dotNotate(obj?: any, target?: any, prefix?: any) {
  target = target || {};
  prefix = prefix || '';

  if (!obj) {
    return target;
  }

  if (!Object.keys(obj)) {
    return target;
  }
  Object.keys(obj).forEach(function (key) {
    if (typeof (obj[key]) === 'object') {
      dotNotate(obj[key], target, prefix + key + ".");
    } else {
      return target[prefix + key] = obj[key];
    }
  });

  return target;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  _authorization?: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertDialogOpener: AlertDialogOpener,
  ) {
  }

  get authorization(): string | undefined {
    return this._authorization;
  }

  set authorization(authorization: string | undefined) {
    this._authorization = authorization;
  }

  makeHttpParams(params = {}): HttpParams {
    let httpParams: HttpParams = new HttpParams({
      encoder: new CustomURLEncoder(),
    });
    if (params !== null) {
      params = dotNotate(params);
      forEach(params, (value: any, key: string) => {
        if (value != null) {
          if (Array.isArray(value)) {
            // @ts-ignore
            for (let arrayValue of value) {
              httpParams = httpParams.append(key, arrayValue);
            }
          } else if (typeof value === 'object') {
            httpParams = httpParams.set(key, value);
          } else if (typeof value !== 'function') {
            httpParams = httpParams.set(key, value);
          }
        }
      });
    }
    return httpParams;
  }

  private makeHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    if (this.authorization) {
      httpHeaders = httpHeaders.set('Authorization', this.authorization);
    }
    return httpHeaders.set('X-Mobile-Version', VERSION.hash);
  }

  async get(path: string, params = {}, responseClass?: any): Promise<any> {
    this.logging(path);
    let httpParams: HttpParams = this.makeHttpParams(params);
    const httpHeaders: HttpHeaders = this.makeHeaders();

    return new Promise((resolve, reject) => {
      this.httpClient.get<ApiResponse<any>>(`${apiBaseUrl}${path}`, {
        observe: 'response',
        params: httpParams,
        headers: httpHeaders,
      }).subscribe(response => {
        const ApiResponse: ApiResponse<any> = <ApiResponse<any>>response.body;
        if (responseClass && (new responseClass()).fillFromJSONObject) {
          if (Array.isArray(ApiResponse.data)) {
            const result = [];
            for (let item of ApiResponse.data) {
              result.push(new responseClass().fillFromJSONObject(item));
            }
            resolve(result);
          } else {
            resolve(new responseClass().fillFromJSONObject(ApiResponse.data));
          }
        } else {
          resolve(ApiResponse.data);
        }
      }, (err: HttpErrorResponse) => {
        reject(this.makeDefaultErrorHandler(err));
      });
    });
  }

  async post(path: string, params: {}, data: any): Promise<any> {
    this.logging(path);
    let httpParams: HttpParams = this.makeHttpParams(params);
    const httpHeaders: HttpHeaders = this.makeHeaders();
    return new Promise((resolve, reject) => {
      return this.httpClient.post<ApiResponse<any>>(`${apiBaseUrl}${path}`, data, {
        observe: 'response',
        headers: httpHeaders,
      }).subscribe(response => {
        const ApiResponse: ApiResponse<any> = response.body as ApiResponse<any>;
        resolve(ApiResponse.data);
      }, (err: HttpErrorResponse) => {
        reject(this.makeDefaultErrorHandler(err));
      })
    });
  }

  async put(path: string, params: any, data: any, responseClass?: any) {
    this.logging(path);
    let httpParams: HttpParams = new HttpParams();
    if (params !== null) {
      forEach(params, (value: any, key: string) => {
        if (value != null) {
          if (Array.isArray(value)) {
            // @ts-ignore
            for (let arrayValue of value) {
              httpParams = httpParams.append(key, arrayValue);
            }
          } else if (typeof value !== 'function') {
            httpParams = httpParams.set(key, value);
          }
        }
      });
    }

    return new Promise((resolve, reject) => {
      const httpHeaders: HttpHeaders = this.makeHeaders();
      return this.httpClient.put<ApiResponse<any>>(`${apiBaseUrl}${path}`, data, {
        observe: 'response',
        params: httpParams,
        headers: httpHeaders,
      }).subscribe(response => {
        const ApiResponse: ApiResponse<any> = response.body as ApiResponse<any>;
        if (responseClass && (new responseClass()).fillFromJSONObject) {
          if (Array.isArray(ApiResponse.data)) {
            const result = [];
            for (const item of ApiResponse.data) {
              result.push(new responseClass().fillFromJSONObject(item));
            }
            resolve(result);
          } else {
            resolve(new responseClass().fillFromJSONObject(ApiResponse.data));
          }

        } else {
          resolve(ApiResponse.data);
        }
        // this.results = data['results'];
      }, (err: HttpErrorResponse) => {
        reject(this.makeDefaultErrorHandler(err));
      });
    });
  }

  async deleteOne(path: string, params = {}) {
    this.logging(path);
    let httpParams: HttpParams = new HttpParams({
      encoder: new CustomURLEncoder(),
    });
    if (params != null) {
      // params = dotNotate(params);
      forEach(params, (value: any, key: string) => {
        if (value != null) {
          if (Array.isArray(value)) {
            // @ts-ignore
            for (const arrayValue of value) {
              httpParams = httpParams.append(key, arrayValue);
            }
          } else if (typeof value === 'object') {
            httpParams = httpParams.set(key, value);
          } else if (typeof value !== 'function') {
            httpParams = httpParams.set(key, value);
          }

        }
      });
    }
    const httpHeaders: HttpHeaders = this.makeHeaders();
    return new Promise((resolve, reject) => {
      this.httpClient.delete<ApiResponse<any>>(`${apiBaseUrl}${path}`, {
        observe: 'response',
        params: httpParams,
        headers: httpHeaders,
      }).subscribe(response => {
        const ApiResponse: ApiResponse<any> = response.body as ApiResponse<any>;
        resolve(ApiResponse.data);
      }, (err: HttpErrorResponse) => {
        reject(this.makeDefaultErrorHandler(err));
      });
    });
  }

  makeDefaultErrorHandler(errorResponse: HttpErrorResponse) {
    sessionStorage.setItem('errResponse', JSON.stringify(errorResponse));
    return new DefaultApiErrorHandler(this.router, errorResponse, this.alertDialogOpener, this.httpClient);
  }

  private logging(path: string) {
    this.loggingHistories(path);
  }

  private loggingHistories(apiPath: string) {
    if (localStorage.getItem('apiHistories')) {
      let apiHistories = `${localStorage.getItem('apiHistories')}\n==> ${apiPath} | time:${format(new Date(), 'HH:mm:ss')}(url:${window.location.pathname})`;
      let historyArr: string[] = apiHistories.split('\n==> ');
      if (historyArr.length > 10) {
        historyArr.shift();
      }
      localStorage.setItem('apiHistories', historyArr.join('\n==> '));
    } else {
      localStorage.setItem('apiHistories', `${apiPath} | time:${format(new Date(), 'HH:mm:ss')}(url:${window.location.pathname})`);
    }
  }
}
