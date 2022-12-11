const fetchData = (url: string, method: "GET" | "POST"): void => {
	console.log("Fetched");
};

//const reqOptions = {
//	url: "https://someurl.com",
//	method: "GET",
//} as const;

const reqOptions = {
	url: "https://someurl.com",
	method: "GET",
};

fetchData("qqq", "GET");
fetchData(reqOptions.url, <"GET">reqOptions.method);

const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement;

const someNumber: number = input.value as any as number;


let a = 'value' as const;

let b = {
	f:100
} as const;

let c = [] as const;

let value = 'value';
let arr = ['sd','dff'];
let obj = {f: 100};

//let T0 = value as const;

//let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const;