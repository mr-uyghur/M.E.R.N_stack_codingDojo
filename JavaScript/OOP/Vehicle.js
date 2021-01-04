class Vehicle{
    constructor(manufacturer, model, color){
        this.miles =0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }
    drive(){
        this.miles +=10
    }
    parentFunction(){
        return "This is coming from the parent!";
    }
}

class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}
// instance
const car = new Vehicle("Mercedez", "Sports", "Red")
car.drive();
console.log(car.manufacturer)
const m5 = new M5("Blue");
m5.childFunction();