const jsonTest = `{ "name": "Test", "data": "4"}`;

interface JSONtest {
	name: string;
	data: number;
}

const objFromJson: JSONtest = JSON.parse(jsonTest);

let toDoList: ToDo[] = [];

interface ToDo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

//fetch("https://jsonplaceholder.typicode.com/todos/1")
//	.then((r) => r.json())
//	.then((json) => {
//		if ("id" in json) {
//			toDoList.push(json);
//		}
//		console.log(toDoList);
//	})
//	.catch((error) => {
//		console.log(error);
//	});

fetch("https://jsonplaceholder.typicode.com/todos")
	.then((r) => r.json())
	.then((json) => {
		if ("id" in json) {
			toDoList.push(json);
		} else if (Array.isArray(json)) {
			toDoList = json;
		}
		console.log(toDoList);
	})
	.catch((error) => {
		console.log(error);
	});

const promise = new Promise<string>((resolve, reject) => {
	resolve("test");
});

promise.then((value) => {
	console.log(value.toLowerCase());
});
