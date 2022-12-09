let salary;
salary = 500;


interface UserData {
	isBirthday: boolean;
	ageData: number;
	userNameData: string;
}

const userData = `{"isBirthday": true, "ageData": 40,"userNameData": "John"}`;
const userObj: UserData = JSON.parse(userData);
console.log(userObj.smth);



let isOkay = true;
let moving: boolean | string = false;

if(isOkay) {
	moving = 'moving';
}