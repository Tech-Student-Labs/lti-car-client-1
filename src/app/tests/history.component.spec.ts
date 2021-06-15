import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from '../components/history/history.component';
import { MockSubmittedVehicleService } from '../models/mock-submitted-vehicle-service';
import { SubmittedVehiclesService } from '../services/submitted-vehicles.service';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide:SubmittedVehiclesService, useClass: MockSubmittedVehicleService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get vehicle data', () => {
    expect(component.inventory.length).toEqual(5);
  });

  it('should render 5 cards', () => {
    expect(fixture.nativeElement.querySelectorAll('.card').length).toEqual(5);
  });

  it('should have a loading status element', () => {
    expect(fixture.nativeElement.querySelector('#loadingStatus')).toBeTruthy();
  });
});
