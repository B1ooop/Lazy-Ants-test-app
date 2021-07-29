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
    let i = 0;
    while (i < 10) {
      this.notationsArray.push({
        id: this.mtService.setId(),
        title: "Lorem ipsum dolor sit amet consectetur ",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab amet corrupti quod numquam ipsa consequatur voluptatem exercitationem unde nemo nesciunt"
      })
      i++;
    }
  }

}
