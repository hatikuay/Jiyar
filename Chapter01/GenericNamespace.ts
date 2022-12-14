namespace GenericNamespace {
    interface Wheels {
        count: number;
        diameter: number;
    }

    interface Vehicle<T> {
        getName(): string;
        getWheelCount: () => T;
    }

    class Automile implements Vehicle<Wheels> {
        constructor(private name:string, private wheels:Wheels) {}
        getName(): string {
            return this.name;            
        }
        getWheelCount(): Wheels {
            return this.wheels
        }
    }

    class Chevy extends Automile {
        constructor() {
            super("Chevy", {count: 4, diameter :18});
        }
    }
}