import { VehicleResponse } from "./vehicle-response";

export class SubmittedVehicles {
    timeStamp: Date;
    vehicle: VehicleResponse;
    
    constructor(timeStamp: Date, vehicle: VehicleResponse){ 
        this.timeStamp = timeStamp;
        this.vehicle = vehicle;
    }
}