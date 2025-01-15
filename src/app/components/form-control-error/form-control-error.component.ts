import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control-error',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: ` 
    @if(control()?.errors?.['required']) {
      <p class="error">This field is required</p>
    }
    @if(control()?.errors?.['minlength']) {
      <p class="error">This field must be at least {{control()?.errors?.['minlength'].actualLength}} / {{control()?.errors?.['minlength'].requiredLength}} characters</p>
    }
    @if(control()?.errors?.['maxlength']) {
      <p class="error">This field must be at most {{control()?.errors?.['maxlength'].requiredLength}} characters</p>
    }
    @if(control() ?.errors?.['email']) {
      <p class="error">This field must be a valid email</p>
    }
    @if(control() ?.errors?.['pattern']) {
      <p class="error">This field must be a valid pattern</p>
    }
    @if(control() ?.errors?.['custom']) {
      <p class="error">This field must be a valid custom</p>
    }
  `,
  styles: `
    .error {
      color: red;
      font-size: 10px;
      opacity: 0.8;
    }
  `
})
export class FormControlErrorComponent {

  control = input<FormControl>();

}

