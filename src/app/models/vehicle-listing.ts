import { VehicleResponse } from "./vehicle-response";

export class VehicleListing {
    price: number;
    vehicle: VehicleResponse;
    
    constructor(price: number, vehicle: VehicleResponse){ 
        this.price = price;
        this.vehicle = vehicle;
    }
}