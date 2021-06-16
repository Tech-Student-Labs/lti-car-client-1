import { VehicleResponse } from "./vehicle-response";

export class SubmittedVehicles {
    userId: string;
    timeStamp: Date;
    vehicle: VehicleResponse;
    
    constructor(userId: string, timeStamp: Date, vehicle: VehicleResponse){ 
        this.userId = userId;
        this.timeStamp = timeStamp;
        this.vehicle = vehicle;
    }
}