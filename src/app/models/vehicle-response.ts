
export class VehicleResponse {
    id: number;
    make: string;
    model: string;
    year: number;
    vinNumber: string;
    marketValue: number;
    
    constructor(id: number, make: string, model: string, year: number, vinNumber: string, marketValue: number){ 
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.vinNumber = vinNumber;
        this.marketValue = marketValue;
    }
}