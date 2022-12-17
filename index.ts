// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:

interface Hours {
	total: number;
	inMenu: number;
}

interface PlayerData<
	G extends number | string,
	H extends number | string | Hours
> {
	game: G;
	hours: H;
	server: string;
}

const player1: PlayerData<string, number> = {
	game: "CS:GO",
	hours: 300,
	server: "basic",
};

const player2: PlayerData<number, string> = {
	game: 2048,
	hours: "300 h.",
	server: "arcade",
};

const player3: PlayerData<string, Hours> = {
	game: "Chess",
	hours: {
		total: 500,
		inMenu: 50,
	},
	server: "chess",
};

// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
	squares: number;
	circles: number;
	triangles: number;
	others: number;
}

enum FigureNames {
	RECT = "rect",
	TRIANGLE = "triangle",
	CIRCLE = "circle",
	LINE = "line",
}

interface Figure {
	name: FigureNames;
}

function calculateAmountOfFigures<T extends Figure>(
	figure: T[]
): AmountOfFigures {
	let squares = 0;
	let circles = 0;
	let triangles = 0;
	let others = 0;

	figure.forEach((item) => {
		switch (item.name) {
			case FigureNames.RECT:
				squares++;
				break;
			case FigureNames.TRIANGLE:
				triangles++;
				break;
			case FigureNames.CIRCLE:
				circles++;
				break;
			default:
				others++;
				break;
		}
	});

	return {
		squares,
		circles,
		triangles,
		others,
	};
}

const data = [
	{
		name: FigureNames.RECT,
		data: { a: 5, b: 10 },
	},
	{
		name: FigureNames.RECT,
		data: { a: 6, b: 11 },
	},
	{
		name: FigureNames.TRIANGLE,
		data: { a: 5, b: 10, c: 14 },
	},
	{
		name: FigureNames.LINE,
		data: { l: 15 },
	},
	{
		name: FigureNames.CIRCLE,
		data: { r: 10 },
	},
	{
		name: FigureNames.CIRCLE,
		data: { r: 5 },
	},
	{
		name: FigureNames.RECT,
		data: { a: 15, b: 7 },
	},
	{
		name: FigureNames.TRIANGLE,
	},
];

console.log(calculateAmountOfFigures(data));
