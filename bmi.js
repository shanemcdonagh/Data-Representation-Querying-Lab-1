class BMI{

    // Initialise objects
    constructor(height,weight){
        this.height = height;
        this.weight = weight;
    }

    // Method - calculates bmi based on the property values of the object
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
    
}

// Instance of BMI
let bmiObj = new BMI(1.7,63);

// Set variable to value returned from method
let myBMI = bmiObj.calculateBMI()

// Output value to console
console.log(myBMI);
