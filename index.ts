type voidFunc = () => void;

const returnString: voidFunc = () => {
	return 'string';
}

console.log(returnString());


const returnNumber: voidFunc = () => {
	return 5;
}


console.log(returnNumber());

function f2(): void {
	return true
}

const f3 = function(): void {
	return true
}

const names = ['alex','john'];

names.forEach((name,index,arr) => arr.push('Hey'));