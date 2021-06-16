import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMarketvaluebymakemodelService {

  private api: string = "https://specifications.vinaudit.com/v3/specifications?key=VA_DEMO_KEY";

  constructor(private http: HttpClient) { }

  GetMarketValue(year: string, make: string, model:string): Observable<any>
  {
    return this.http.get(this.api + '&year=' + year + '&make=' + make + '&model=' + model);
  }

}
