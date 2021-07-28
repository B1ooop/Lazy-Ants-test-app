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

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public mtService: ManagementToolsService,
  ) { }

  action: string;

  ngOnInit(): void {
    switch (this.data.action) {
      case 'delete':
        this.action = "удалить нотацию";
        break;
      case 'saveNew':
        this.action = "создать нотацию";
        break;
      case 'saveEdit':
        this.action = "сохранить изменения";
        break;
    }
  }
}
