import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control-error',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-control-error.component.html',
  styleUrl: './form-control-error.component.css'
})
export class FormControlErrorComponent {
  @Input({required: true}) control?: FormControl | null = null ;
}
