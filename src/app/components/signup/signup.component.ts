import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(public fb: FormBuilder) {}
  signupForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
    confirmpassword: [''],
  });
  submitForm() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.signupForm.reset();
    }
  }
}
