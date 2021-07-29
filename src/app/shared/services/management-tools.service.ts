import { Injectable } from '@angular/core';
import { Notation } from '../interfaces/notation';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ManagementToolsService {

  notationsArray: Array<Notation>;

  constructor(

    private LS: LocalStorageService
  ) {
    LS.storageData.subscribe((data) => {
      this.notationsArray = data;
    })
  }

  chooseAction(data) {
    switch (data.action) {
      case 'delete':
        this.delete(data.id);
        break;
      case 'saveNew':
        this.saveNew(data.notation);
        break;
        case 'saveEdit':
          this.saveEdit(data.notation);
          break;      
    }
  }


  saveNew(notation) {
    let tempArr = this.LS.data;
    tempArr.push(notation);
    this.LS.data = tempArr;
  }

  saveEdit(notationEdit) {
    let tempArr = this.LS.data;
    this.LS.data = tempArr.map(notation => {
      if (notation.id == notationEdit.id) { return notationEdit; }
      return notation;
    });
  }

  delete(id: string): void {
    this.LS.data = this.LS.data.filter(notation => notation.id !== id);
  }

  setId() {
    return Math.random().toString();
  }
}
