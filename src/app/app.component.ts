import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLinkActive,
    RouterModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'levelUp';
}
