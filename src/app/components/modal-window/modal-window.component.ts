import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ManagementToolsService } from 'src/app/shared/services/management-tools.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {
  color: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public mtService: ManagementToolsService,
  ) { }

  action: string;
  cancel: string = "отменить";

  ngOnInit(): void {
    switch (this.data.action) {
      case 'delete':
        this.action = "удалить нотацию";
        this.color = "color-warn";
        break;
      case 'saveNew':
        this.action = "создать нотацию";
        this.color = "color-success";
        break;
      case 'saveEdit':
        this.action = "сохранить изменения";
        this.color = "color-success";
        break;
      case 'cancelEdit':
        this.action = "отменить редактирование";
        this.cancel = "остаться";
        this.color = "color-warn";
        break;
      case 'cancelNew':
        this.action = "отменить создание";
        this.cancel = "остаться";
        this.color = "color-warn";
        break;
    }
  }
}
