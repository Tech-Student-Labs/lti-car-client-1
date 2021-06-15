import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetVehiclemakesService {

constructor(private http: HttpClient) { }

  api: string = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json";

  GetAllMakes() : Observable<any>
  {
    return this.http.get<any>(this.api);
  }
}
