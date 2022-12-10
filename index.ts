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
