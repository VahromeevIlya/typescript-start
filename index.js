var isBirthday = true;
var userName = 'John';
var age = 40;
function logBirthday(isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName, " , your age: ").concat(age + 1);
    }
    else {
        return 'Error';
    }
}
