import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Notation } from 'src/app/shared/interfaces/notation';
import { ManagementToolsService } from 'src/app/shared/services/management-tools.service';
import { ModalWindowService } from 'src/app/shared/services/modal-window.service';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.scss']
})
export class NotationComponent implements OnInit {

  notationForm: FormGroup;
  saveButton: string;
  action: string;
  edit: boolean;

  constructor(
    public modalWindowService: ModalWindowService,
    private fb: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public mtService: ManagementToolsService,
  ) { }

  ngOnInit(): void {
    /* console.log(this.activatedRoute.snapshot.url); */

    this.notationFormInit();
    this.edit = this.router.url.includes("edit")
    this.edit ? (this.saveButton = "Сохранить изменения", this.action = "saveEdit") : (this.saveButton = "Создать нотацию", this.action = "saveNew");
  }

  notationFormInit(): void {
    this.notationForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]]
    })
  }

  notationFormSubmit() {
    let notation: Notation = {
      id: this.mtService.setId(),
      title: this.notationForm.value.title,
      description: this.notationForm.value.description
    }
    this.modalWindowService.confirmation(this.action, notation.id, notation);
  }
}
