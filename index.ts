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

const dbName = "12345";
function setUserData(obj: User, db?: string): void {
	console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase());
}
