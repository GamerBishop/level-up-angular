import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControlErrorComponent } from "../../components/form-control-error/form-control-error.component";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [
    ReactiveFormsModule,
    FormControlErrorComponent,
    CommonModule
  ],
  template: `
     <div class="wrapper">
      <h1>Sign In</h1>
     <form [formGroup]="form">
      <input type="text" formControlName="username" placeholder="Enter your username" />
      <app-form-control-error [control]="form.controls['username']" />
      <button [disabled]="form.invalid" type="submit" (click)="signIn()">Sign In</button>
     </form>
     </div>
  `,
  styleUrl: './sign-in.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {

  private authService = inject(AuthService);

  constructor() { }

  // Form Angular with username
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  signIn() {
    this.authService.signIn(this.form.value.username || '').subscribe(res => {
      console.table(res);
    })
  }

}
