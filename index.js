var jsonTest = "{ \"name\": \"Test\", \"data\": \"4\"}";
var objFromJson = JSON.parse(jsonTest);
var toDoList = [];
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
    .then(function (r) { return r.json(); })
    .then(function (json) {
    if ("id" in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    console.log(toDoList);
})["catch"](function (error) {
    console.log(error);
});
