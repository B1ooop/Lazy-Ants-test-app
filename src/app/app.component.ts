import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notation } from './shared/interfaces/notation';
import { LocalStorageService } from './shared/services/local-storage.service';
import { ManagementToolsService } from './shared/services/management-tools.service';
import { ModalWindowService } from './shared/services/modal-window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lazy-Ants-test-app';

  notationsArray: Array<Notation>;
  addButton: string;

  constructor(
    public activatedRoute: ActivatedRoute,
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
}
