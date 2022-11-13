namespace AbstractNamespace {
    abstract class Vehicle {
        constructor(protected wheelCount: number) {

        }
        abstract updateWheelCount(newWhellCount: number): void;

        showNumberOfWheels() {
            console.log(`moved ${this.wheelCount} miles`)
        }
    }
    
    class Motorcycle extends Vehicle {
        constructor() {
            super(2);
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }

    class Automobile extends Vehicle {
        constructor() {
            super(4);
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Motorcycle has ${this.wheelCount}`);
        }
    }

    const motorCycle = new Motorcycle();
    motorCycle.updateWheelCount(1);
    motorCycle.showNumberOfWheels();
    const automobile = new Automobile();
    automobile.updateWheelCount(3);
    automobile.showNumberOfWheels();

}