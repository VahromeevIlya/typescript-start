type Example = "string" extends "Hellow" ? string : number;

type FromUserOrFromBase<T extends string | number> = T extends string
	? IDataFromUser
	: IDataFromBases;

interface IDataFromUser {
	weight: string;
}

interface User<T extends "created" | Date> {
	created: T extends "created" ? "created" : Date;
}

interface IDataFromBases {
	calories: number;
}

const test: FromUserOrFromBase<string> = {
	weight: "200",
};

const user: User<"created"> = {
	created: "created",
};

//function calculateDailyCalories(str: string): IDataFromUser;
//function calculateDailyCalories(num: number): IDataFromBases;
function calculateDailyCalories<T extends string | number>(
	numOrStr: T
): T extends string ? IDataFromUser : IDataFromBases {
	if (typeof numOrStr === "string") {
		const obj: IDataFromUser = {
			weight: numOrStr,
		};
		return obj as FromUserOrFromBase<T>;
	} else {
		const obj: IDataFromBases = {
			calories: numOrStr,
		};
		return obj as FromUserOrFromBase<T>;
	}
}

type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
	? "hello"
	: T extends "world"
	? "world"
	: string;

//вытащим первый элемент массива
type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<number[]>;

type ToArray<Type> = Type extends any ? Type[] : never;

type ExArray = ToArray<Ex | string>;