import { Observable, of } from 'rxjs';

export class MockMarketValueByMakeModel {
    GetMarketValue(): Observable<any>
    {
        return of({'marketValue': '20000'});
    }
}
