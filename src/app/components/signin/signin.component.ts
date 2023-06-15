import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  constructor(public fb: FormBuilder) {}
  signinForm = this.fb.group({
    email: [''],
    password: [''],
  });
  submitForm() {
    if (this.signinForm.valid) {
      console.log(this.signinForm.value);
      this.signinForm.reset();
    }
  }
}
