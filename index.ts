const isBirthday: boolean = true;
const userName: string = 'John';
const age: number = 40;


const createError = (msg: string) => {
	throw new Error(msg)
}

function logBirthday(isBirthday: boolean,userName: string,age: number): string {
	if(isBirthday === true) {
		return `Congrats ${userName} , your age: ${age + 1}`;
	} else if(isBirthday === false) {
		return 'Too bad';
	}
	return createError('Error');
}