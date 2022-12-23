type Currencies = {
	usa: "usd";
	china: "cny";
	ukraine: "uah";
	kz: "tenge";
};

type CurrWithoutUSA = Omit<Currencies, "usa">; // исключение
type CurrUSAandUkraine = Pick<Currencies, "usa" | "ukraine">; // фильтрация по свойству
type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">;

type FadeType = Exclude<MyAnimation, "swipe">; //Удаление из union type
type SwipeType = Extract<MyAnimation, "swipe">; // Выбор подходящего типа

type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = "alex" | "john";
type CustomCurrencies = CreateCustomCurr<Currencies>;

type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

const gameData: GameDataCurr = {
	alex: {
		customChina: "qqqq",
		customKz: "ww",
		customUkraine: "wfwe",
		customUsa: "fwef",
	},
	john: {
		customChina: "qqqq",
		customKz: "ww",
		customUkraine: "wfwe",
		customUsa: "fwef",
	},
};

type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
