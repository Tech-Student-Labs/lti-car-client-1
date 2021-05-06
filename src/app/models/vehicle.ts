// To parse this data:
//
//   import { Convert, Vehicle } from "./file";
//
//   const vehicle = Convert.toVehicle(json);

export interface Vehicle {
    input:      Input;
    selections: Selections;
    attributes: Attributes;
    success:    boolean;
    error:      string;
}

export interface Attributes {
    year:                                string;
    make:                                string;
    model:                               string;
    trim:                                string;
    style:                               string;
    type:                                string;
    size:                                string;
    category:                            string;
    made_in:                             string;
    made_in_city:                        string;
    doors:                               string;
    fuel_type:                           string;
    fuel_capacity:                       string;
    city_mileage:                        string;
    highway_mileage:                     string;
    engine:                              string;
    engine_size:                         string;
    engine_cylinders:                    string;
    transmission:                        string;
    transmission_type:                   string;
    transmission_speeds:                 string;
    drivetrain:                          string;
    anti_brake_system:                   string;
    steering_type:                       string;
    curb_weight:                         string;
    gross_vehicle_weight_rating:         string;
    overall_height:                      string;
    overall_length:                      string;
    overall_width:                       string;
    wheelbase_length:                    string;
    standard_seating:                    string;
    invoice_price:                       string;
    delivery_charges:                    string;
    manufacturer_suggested_retail_price: string;
}

export interface Input {
    key:    string;
    year:   string;
    make:   string;
    model:  string;
    trim:   string;
    format: string;
}

export interface Selections {
    trims: Trim[];
}

export interface Trim {
    id:       string;
    name:     string;
    selected: number;
    styles:   any[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toVehicle(json: string): Vehicle {
        return JSON.parse(json);
    }

    public static vehicleToJson(value: Vehicle): string {
        return JSON.stringify(value);
    }
}
