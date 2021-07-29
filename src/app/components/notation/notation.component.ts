import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notation } from 'src/app/shared/interfaces/notation';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { ManagementToolsService } from 'src/app/shared/services/management-tools.service';
import { ModalWindowService } from 'src/app/shared/services/modal-window.service';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss']
})
export class NotationComponent implements OnInit {

  notationsArray: Array<Notation>;
  notationForm: FormGroup;
  editNotation: Notation;
  saveButton: string;
  action: string;
  edit: boolean;

  constructor(
    private LS: LocalStorageService,
    public modalWindowService: ModalWindowService,
    private fb: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public mtService: ManagementToolsService,
  ) {
    LS.storageData.subscribe((data) => {
      this.notationsArray = data;
    })
  }

  ngOnInit(): void {
    this.ifEdit()
    this.notationFormInit();
  }


  ifEdit(): void {
    if (this.activatedRoute.snapshot.url[1]) {
      this.editNotation = this.notationsArray.filter(notation => notation.id == this.activatedRoute.snapshot.url[1].path)[0];
      this.edit = true;
      this.saveButton = "Сохранить изменения";
      this.action = "saveEdit";
    } else {
      this.edit = false;
      this.saveButton = "Создать нотацию";
      this.action = "saveNew";
    }
  }

  notationFormInit(): void {
    this.notationForm = this.fb.group({
      title: [this.edit ? this.editNotation.title : "", [Validators.required]],
      description: [this.edit ? this.editNotation.description : "", [Validators.required]]
    })
  }


  notationFormSubmit() {
    let notation: Notation = {
      id: this.edit ? this.editNotation.id : this.mtService.setId(),
      title: this.notationForm.value.title,
      description: this.notationForm.value.description
    }
    this.modalWindowService.confirmation(this.action, notation.id, notation);
  }
}
