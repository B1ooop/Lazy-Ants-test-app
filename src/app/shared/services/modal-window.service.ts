import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from 'src/app/components/modal-window/modal-window.component';
import { Notation } from '../interfaces/notation';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  constructor(
    public dialog: MatDialog,
  ) { }

  confirmation(action: string, id?: string, notation?: Notation) {
    this.dialog.open(ModalWindowComponent, { data: { action: action, id: id, notation: notation } });
  }
}
