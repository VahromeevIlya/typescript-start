//let num: Number = new Number(5);
//let num2: number = 5;
//let num3 = Number(5);

//num = num2;
//num2 = num;

const num = 5;
const strNum: string = num.toString();
const str = '5';
const numStr: number = +str;

interface Department {
	name: string;
	budget: number;
}

const department = {
	name: 'web-dev',
	budget: 50000
}
interface Project {
	name: string,
	projectBudjet: number
}


function transformDepartment(department: Department, amout: number): Project {
	return {
		name: department.name,
		projectBudjet: amout
	}
}

const mainProject: Project = transformDepartment(department,4000);