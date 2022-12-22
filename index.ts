type Currencies = {
	usa: "usd";
	readonly china: "cny";
	ukraine: "uah";
	kz?: "tenge";
};

type CreateCustomCurr<T> = {
	-readonly [P in keyof T]-?: string;
};

type ROnlyCurr = Readonly<Currencies>;

type CustomCurrencies = CreateCustomCurr<Currencies>;

//type CustomCurrencies = {
//	usa: string;
//	china: string;
//	ukraine: string;
//	kz: string;
//};

//type СопоставимыйТип = {
//	[произвольныйИндетификатор in Множество]: ПроизвольныйТипДанных;
//}

type Keys = "name" | "age" | "role";

type User = {
	[K in Keys]: string;
};

const alex: User = {
	name: "Alex",
	age: "25",
	role: "admin",
};
