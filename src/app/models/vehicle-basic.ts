export class VehicleBasic {
  model: string;
  year: string;
  vin: string;


  constructor(model: string, year:string, vin:string){
    this.model = model;
    this.year = year;
    this.vin = vin;
  }
}
