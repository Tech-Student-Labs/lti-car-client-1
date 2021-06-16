import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetVehiclemakesService {

constructor(private http: HttpClient) { }

  api: string = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/";

  GetMakesByType(type: string): Observable<any>
  {
    return this.http.get<any>(this.api + type + "?format=json");
  }
}
