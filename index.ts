function printMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (isNumber(msg)) {
		console.log(msg);
	} else {
		console.log(msg);
	}
}
printMsg(4);

//function isNumber(n: string[] | number | boolean): n is number {
//	return typeof n === "number";
//}
function isNumber(n: unknown): n is number {
	return typeof n === "number";
}

interface Car {
	name: "car";
	engine: string;
	wheels: {
		number: number;
		type: string;
	};
}

interface Ship {
	name: "ship";
	engine: string;
	sail: string;
}

interface Airplane {
	name: "airplane";
	engine: string;
	wings: string;
}
interface SuperAirplane {
	name: "smth";
	engine: string;
	wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;

function repairVehicle(vehicle: Vehicle) {
	//if(isCar(vehicle)) {
	//	console.log(vehicle);
	//} else if(isShip(vehicle)) {
	//	console.log(vehicle);
	//} else {
	//	vehicle;
	//}
	switch (vehicle.name) {
		case "car":
			console.log(vehicle.wheels);
			break;
		case "ship":
			console.log(vehicle.sail);
			break;
		case "airplane":
			console.log(vehicle.wings);
			break;
		case "smth":
			console.log(vehicle.wings);
			break;
		default:
			const smth: never = vehicle;
			console.log('Ouuups');
			break;
	}
}

function isCar(car: Vehicle): car is Car {
	//return "wheels" in car;
	return (car as Car).wheels.number !== undefined;
}
function isShip(ship: Vehicle): ship is Ship {
	return "sail" in ship;
	//return (car as Car).wheels.number !== undefined;
}
