const isBirthday: boolean = true;
const userName: string = 'John';
const age: number = 40;



function logBirthday(isBirthday: boolean,userName: string,age: number): string {
	if(isBirthday) {
		return `Congrats ${userName} , your age: ${age + 1}`;
	} else {
		return 'Error';
	}
}