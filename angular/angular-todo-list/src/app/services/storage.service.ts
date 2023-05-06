import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    // 处理null
    return JSON.parse(window.localStorage.getItem(key) || "[]");
  }

  remove(key: string) {
    window.localStorage.removeItem(key);
  }
}
