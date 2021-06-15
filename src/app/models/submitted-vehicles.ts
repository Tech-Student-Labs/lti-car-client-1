export class SubmittedVehicles {
    date: Date;
    id: number;
    make: string;
    model: string;
    year: number;
    vinNumber: string;
    
    constructor(date: Date, id: number, make: string, model: string, year: number, vinNumber: string){ 
        this.date = date;
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.vinNumber = vinNumber;
    }
}