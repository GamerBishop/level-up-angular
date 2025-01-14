import { Component } from '@angular/core';

import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlErrorComponent } from "../../components/form-control-error/form-control-error.component";



@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    FormControlErrorComponent
],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  signInForm = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  SignIn() {
    console.log(this.signInForm.value);
  }
}
