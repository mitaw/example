import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  signupform: FormGroup;
  // userData = {username: '', password: '', email: '', name: '', confirm_password: ''};

  constructor() {
  }

  ngOnInit() {
    const EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      // tslint:disable-next-line:max-line-length
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      confirm_password: new FormControl('', [Validators.required])
    }, this.passwordMatchValidator);
  }
  passwordMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirm_password').value ? null : {mismatch: true};
  }
  get password() { return this.signupform.get('password'); }
  get confirm_password() { return this.signupform.get('confirm_password'); }

  signup() {
    console.log(this.signupform.value);
  }
}
