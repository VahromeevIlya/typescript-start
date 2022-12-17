interface ProcessingFn {
	<T>(data: T): T;
}

function processing<T>(data: T): T {
	return data;
}

let newFunc: ProcessingFn = processing;

type Smth<T> = T;

const number: Smth<number> = 5;

interface Parents {
	mother: string;
	father: string;
}

interface User<ParentsData extends Parents> {
	login: string;
	age: number;
	parents: ParentsData;
}

const user: User<{ mother: string; father: string,married: boolean }> = {
	login: "login",
	age: 25,
	parents: {
		mother: "mother",
		father: "father",
		married: true
	},
};


type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5];


//const depositMoney = <T extends number | string>(amout: T): T => {
//	console.log(`req to server with amout: ${amout}`);
//	return amout;
//}
//depositMoney(500);

//depositMoney('500');
//depositMoney(false);

const depositMoney = (amout: number | string): number | string => {
	console.log(`req to server with amout: ${amout}`);
	return amout;
}
depositMoney(500);

depositMoney('500');
depositMoney(false);