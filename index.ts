//let str: unknown;

//str = 'str';

//let data: string[] = str;
//data.find(e => e);

//const someValue: unknown = 10;
//someValue.method();

function fetchData(data: unknown): void {
	if(typeof data  === 'string') {
		console.log(data.toLowerCase());
	}
	
}
const userData = `{"isBirthday": true, "ageData": 40,"userNameData": "John"}`;

function safeParse(s: string): unknown {
	return JSON.parse(s);
}

const data = safeParse(userData);

function transferData(d: unknown): void {
	if(typeof d === 'string') {
		console.log(d.toLowerCase());
	} else if(typeof d === 'object' && d) {
		console.log(d);
	} else {
		console.error('some error')
	}
}
transferData(data);

try {
	if(1) {
		throw new Error('error');
	}
} catch (error) {
	if(error instanceof Error) {
		console.log(error.message);
	} else if(typeof error === 'string') {
		console.log(error);
	}
}

type T0 = any | unknown;
type T1 = number | unknown;
type T2 = any & unknown;
type T3 = number & unknown;