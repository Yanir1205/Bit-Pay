import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root' }
)
export default class StorageServiceService {

  constructor() { }

  public saveToStorage(key: string, value: Object) {
    var str = JSON.stringify(value);
    localStorage.setItem(key, str);
  }

  public load(key: string) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
  }

}
