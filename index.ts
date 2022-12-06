const msg: string | number = 19;
const array: string[] | number[] = ["1", "a"];

//function logMsg (msg: string | number): void {
//	if(typeof msg === 'string') {
//		console.log(msg.toLowerCase());
//	} else {
//		console.log(msg.toExponential());
//	}

//}
function logMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (typeof msg === "number") {
		console.log(msg.toExponential());
	} else {
		console.log(msg);
	}
}
logMsg(5);

function printReadings(a: number | string, b: number | boolean): void {
	if (a === b) {
		console.log(a);
	}
}
function printReadings2(a: number[] | string): void {
	console.log(a.slice(0, 3));
}

function checkReading(readings: {system: number} | {user: number}): void {
	if('system' in readings) {
		console.log(readings.system);
	} else {
		console.log(readings.user);	
	}
}

function logValue(x: string | Date): void {
	if(x instanceof Date) {
		console.log(x.getDay());
	} else {
		console.log(x);
	}
}