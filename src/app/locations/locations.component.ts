import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { LocationsService } from './service/locations.service';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Location } from './types/location';
@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DataViewModule,
    TableModule,
    SelectButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  formGroup!: FormGroup;
  filterControl = new FormControl('');

  stateOptions: any[] = [
    { label: 'TableView', value: 'tableView' },
    { label: 'GridView', value: 'gridView' },
  ];
  constructor(private locationsService: LocationsService) {}

  locations$: Observable<Location[]> | undefined;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      value: new FormControl('tableView'),
    });

    this.locations$ = this.filterControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchTerm) =>
        this.locationsService
          .getAllLocations()
          .pipe(
            map((data) =>
              data.filter((item: Location) =>
                item.address
                  .toLowerCase()
                  .includes(searchTerm ? searchTerm.toLowerCase() : '')
              )
            )
          )
      )
    );

    // this.locationsService.getAllLocations();
  }
}
