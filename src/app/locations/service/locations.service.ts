import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Location } from '../types/location';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/';

  getAllLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.baseUrl}locations`);
  }
}
