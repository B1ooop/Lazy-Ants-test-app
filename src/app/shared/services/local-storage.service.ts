import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storageData = new BehaviorSubject(this.data);

  set data(arr) {
    this.storageData.next(arr);
    localStorage.setItem('data', JSON.stringify(arr));
  }

  get data() {
    return JSON.parse(localStorage.getItem('data'));
  }
}
