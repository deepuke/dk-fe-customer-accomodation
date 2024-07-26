import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { LocationsService } from './service/locations.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [ButtonModule, CommonModule, DataViewModule, TableModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  constructor(private locationsService: LocationsService) {}

  locations$: Observable<any> | undefined;
  ngOnInit(): void {
    this.locations$ = this.locationsService.getAllLocations();
  }
}
