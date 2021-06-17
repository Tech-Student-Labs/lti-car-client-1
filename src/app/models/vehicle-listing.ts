import { VehicleResponse } from "./vehicle-response";

export class VehicleListing {
    vehicleId: number;
    price: number;
    vehicle: VehicleResponse;
    
    constructor(vehicleId: number, price: number, vehicle: VehicleResponse){ 
        this.vehicleId = vehicleId;
        this.price = price;
        this.vehicle = vehicle;
    }
}