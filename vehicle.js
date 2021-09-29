class Vehicle{
    
    // Initialises instances of Vehicle
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method - Outputs vehicle details to the console
    Information()
    {
        console.log(this.make,this.model,this.year);
    }
}

// Instance of Vehicle
let myVehicle = new Vehicle("Chevrolet","Camero","1999");

// Invoke the information method
myVehicle.Information();


// Car class
class Car extends Vehicle{

    constructor(make,model,year,doors){
        this.make = make;
        this.model = model;
        this.year = year;
        this.doors = doors;

        super.Vehicle.constructor(this.make,this.model,this.doors);
    }

     // Method - Outputs vehicle details to the console
     Information()
     {
         
         console.log(super.Vehicle.Information(),this.doors);
     }

}

let myCar = new Car("Ford","Fiesta","2011",4);
myCar.Information();