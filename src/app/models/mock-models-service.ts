import { Observable, of } from 'rxjs';
import MODELS from '../../assets/models.json';

export class MockModelsService {
    GetAllModels(): Observable<any>
    {
        return of(MODELS);
    }
}
