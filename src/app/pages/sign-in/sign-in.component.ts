import { Component, inject } from '@angular/core';

import {FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlErrorComponent } from "../../components/form-control-error/form-control-error.component";
import { AuthService } from '../../services/auth.service';



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

  private readonly authService = inject(AuthService);



  signInForm = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  SignIn() {
    console.log(this.signInForm.value);
    const username = this.signInForm.value.username;
    if (username) {
      this.authService.signIn(username).subscribe((profile) => {
        console.log('Requests sent');
        if (profile) {
          console.log('Signed in as', profile);
        }});

    } else {
      console.error('Username is required');
    }
  }
}
