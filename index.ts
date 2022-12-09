interface User {
	login: string;
	password: string;
	age: number;
	//addr?: string;
	addr: string | undefined;
	parents?: {
		mother?: string;
		father?: string;
	};
}

const user: User = {
	login: "TTT",
	password: "qwerty",
	age: 59,
	addr: undefined,
};

let dbName:string;
setUserData(user,'q2331');
console.log(dbName!);

function setUserData(obj: User, db?: string): void {
	dbName = "12345";
	console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase());
}
