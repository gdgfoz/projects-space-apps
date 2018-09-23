import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'sa-remind',
  templateUrl: './remind.component.html',
  styleUrls: ['./remind.component.scss']
})
export class RemindComponent implements OnInit {

  remindForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.remindForm = new FormGroup({
      email: new FormControl('', [Validators.required])
    });
  }

}
