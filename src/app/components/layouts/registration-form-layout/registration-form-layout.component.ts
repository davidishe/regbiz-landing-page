import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form-layout',
  templateUrl: './registration-form-layout.component.html',
  styleUrls: ['./registration-form-layout.component.scss']
})
export class RegistrationFormLayoutComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  fnSubmit() {

  }


  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null,
        [Validators.required,
        Validators.email]),
      phone: new FormControl(null,
        [Validators.required,
        Validators.minLength(6)])
    });
  }

}
