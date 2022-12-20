const userData = {
	isBirthday: true,
	userName: "John",
	age: 40,
	messages: { error: "Error" },
};

const userDataTupple: [boolean, number, string] = [true, 40, "John"];

const res = userDataTupple.map((d) => `${d} - done`);

const [brithday, age, userName] = res;

const createError = (msg: string) => {
	throw new Error(msg);
};

function logBirthday({
	isBirthday,
	userName,
	age,
	messages: { error },
}: {
	isBirthday: boolean;
	userName: string;
	age: number;
	messages: { error: string };
}): string {
	if (isBirthday) {
		return `Congrats ${userName} , your age: ${age + 1}`;
	} else {
		return createError(error);
	}
}
logBirthday(userData);

const departmens: string[] = ["dev", "design", "marketing"];

const department = departmens[0];

const nums: number[][] = [
	[2, 3, 3],
	[4, 5, 6],
];

const report = departmens
	.filter((d: string) => d !== "dev")
	.map((d: string) => `${d} - done`);

const [first] = report;

//prepare for lesson 21
//finish 1/4
//finish 26 lesson
//finish 27 lesson
//finish 33 lesson
//finish practice 4
//finish 39
//finish 41
//finish 42
//finish 43
//finish 44
//finish 46
//finish 47 
//finish 50
//finish 55
//finish 56