import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetVehiclemodelsService {

  constructor(private http: HttpClient) { }

  private api: string = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/";
  public _make: string = '';

  GetAllModels(make: string): Observable<any>
  {
    this._make = make;
    return this.http.get(this.api + make + '?format=json');
  }

}
