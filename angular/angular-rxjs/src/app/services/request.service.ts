import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步
  getSynchroData() {
    return "getSynchroData";
  }

  // 异步，回调函数
  getCallbackData(cb: any) {
    window.setTimeout(() => {
      const data = "getCallbackData";
      cb(data);
    }, 3000);
  }

  // 异步，Promise
  getPromiseData() {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        const data = "getPromiseData";
        resolve(data);
      }, 3000);
    });
  }

  // 异步，RxJS
  getRxJSData() {
    return new Observable((subscriber) => {
      window.setTimeout(() => {
        const data = "getRxJSData";
        subscriber.next(data);
      }, 3000);
    });
  }

  // 异步，RxJS，多次触发
  getRxJSIntervalData() {
    let count = 0;
    return new Observable((subscriber) => {
      window.setInterval(() => {
        const data = "getRxJSIntervalData " + (++count);
        subscriber.next(data);
      }, 3000);
    });
  }

  // 异步，RxJS，多次触发
  getRxJSIntervalNumber() {
    let count = 0;
    return new Observable((subscriber) => {
      window.setInterval(() => {
        const data = ++count;
        subscriber.next(data);
      }, 1000);
    });
  }

}
