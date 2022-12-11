var fetchData = function (url, method) {
    console.log("Fetched");
};
//const reqOptions = {
//	url: "https://someurl.com",
//	method: "GET",
//} as const;
var reqOptions = {
    url: "https://someurl.com",
    method: "GET"
};
fetchData("qqq", "GET");
fetchData(reqOptions.url, reqOptions.method);
var box = document.querySelector('.box');
var input = document.querySelector('input');
var someNumber = +input.value;
