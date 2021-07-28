import { Component, OnInit } from '@angular/core';
import { Notation } from 'src/app/shared/interfaces/notation';
import { ManagementToolsService } from 'src/app/shared/services/management-tools.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ModalWindowService } from 'src/app/shared/services/modal-window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notationsArray: Array<Notation>;

  constructor(
    private LS: LocalStorageService,
    public mtService: ManagementToolsService,
    public modalWindowService: ModalWindowService
  ) {
    LS.storageData.subscribe((data) => {
      this.notationsArray = data;
    })
  }

  ngOnInit(): void {
  }

  addLS() {
    this.LS.data = [
      {
        id: this.mtService.setId(),
        title: "notation 1",
        description: "description 1"
      },
      {
        id: this.mtService.setId(),
        title: "notation 2",
        description: "description 2"
      },
      {
        id: this.mtService.setId(),
        title: "notation 3",
        description: "description 3"
      },
    ];

    this.notationsArray = this.LS.data;
  }

}
