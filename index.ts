// структура данных склада с одеждой
type ValidAmout = "empty" | number;

interface ClothesWarehouse {
	jackets: ValidAmout;
	hats: ValidAmout;
	socks: ValidAmout;
	pants: ValidAmout;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
	scissors: ValidAmout;
	paper: "empty" | boolean;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
	dishwashers: ValidAmout;
	cookers: ValidAmout;
	mixers: ValidAmout;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse
	extends ClothesWarehouse,
		StationeryWarehouse,
		AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: false,
	date: new Date(),
};
const totalData2: TotalWarehouse = {
	jackets: 5,
	hats: 5,
	socks: 10,
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: 12,
	mixers: 14,
	deficit: false,
	date: new Date(),
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.
type Item = [string, number | boolean | "empty" | Date];

function printReport(data: TotalWarehouse): string {
	const empty: [string, "empty"][] = Object.entries(data).filter(
		(item: Item) => item[1] === "empty"
	);
	if (empty.length) {
		const items = empty.map((item) => item[0]);
		return `We need this items: ${items.join(", ")}`;
	}
	console.log(typeof empty);
	return "Everything fine";
}

console.log(printReport(totalData));
console.log(printReport(totalData2));
