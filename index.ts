function calculate(a: number, b: number): number {
	return a * b;
}

type CalculateRT = ReturnType<typeof calculate>;

let anotherRes: CalculateRT = 5;

type CalculatePT = Parameters<typeof calculate>;

type RT1 = Parameters<(a: number) => number>;
type RT2 = Parameters<<T>(arg: T) => T>;

class Example {
	constructor(a:number) {}
}


type T0 = ConstructorParameters<typeof Example>;