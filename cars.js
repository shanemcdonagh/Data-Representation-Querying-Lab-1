// Vehicle class
class Vehicle
{
    
    // Initialises instances of 'Vehicle' class
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method - Outputs vehicle details to the console
    Information() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);

    }
}

// Car class
class Cars extends Vehicle
{

    // Initialises instance of Car
    constructor(make,model,year,doors){
       
        // Invoke parent constructor, pass it 3 arguements
        super(make,model,year);

        // Initialise property 'doors'
        this.doors = doors;
    }

     // Method - Outputs vehicle details to the console
     Information()
     {
         // Invokes parent method "Information"
         super.Information();

         // Outputs value "doors" to console
         console.log(`Doors: ${this.doors}`);
     }

}

// Instance of 'Vehicle' class
// let myVehicle = new Vehicle("Chevrolet","Camero",1999);

// // Invoke the information method
// myVehicle.Information();

// Instance of 'Car' class
let myCar = new Cars("Ford","Fiesta",2011,4);

// Invoke the 'Information' method of class 'Car'
myCar.Information();