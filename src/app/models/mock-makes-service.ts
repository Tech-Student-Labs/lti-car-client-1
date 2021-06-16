import { Observable, of } from 'rxjs';
import MAKES from '../../assets/makes.json';

export class MockMakesService {
    GetMakesByType(): Observable<any>
    {
        return of(MAKES);
    }
}
