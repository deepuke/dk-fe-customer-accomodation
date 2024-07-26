import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LocationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dev_01';
}
