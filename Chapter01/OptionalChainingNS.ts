namespace OptionalChainingNS {
    interface Wheels {
        count?: number;
    }

    interface Vehicle {
        wheels?: Wheels;
    }

    class Automile implements Vehicle {
        constructor(public wheels?: Wheels) { }
    }

    const car : Automile | null = new Automile({count: undefined});

    console.log("car ", car);
    console.log("wheels ", car?.wheels);
    console.log("count ", car?.wheels?.count);


    const val1 = undefined;
    const val2 = 10;
    const result = val1 ?? val2

    console.log(result);

}