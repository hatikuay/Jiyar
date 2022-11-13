class Runner {
    static lastRunTypeName: string;
    constructor(private typeName: string) {
    }
    run() {
        Runner.lastRunTypeName = this.typeName;
    }
}

const aRun = new Runner("a");
const bRun = new Runner("b");

bRun.run();
aRun.run();

console.log(Runner.lastRunTypeName);