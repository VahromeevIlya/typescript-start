interface ICompany {
	name: string;
	debts: number;
	departments: Department[];
	management: {
		owner: string;
	};
}

interface Department {
	[key: string]: string;
}

//const debts = "debts";
//let debts = "debts" as "debts";
let debts: "debts" = "debts";

type CompanyDebtsType = ICompany[typeof debts];

//type CompanyDebtsType = ICompany["debts"];
type CompanyOwnerType = ICompany["management"]["owner"];
type CompanyDeparmentsType = ICompany["departments"][number];
type CompanyDeparmentsTypeS = ICompany["departments"];
type Test = ICompany[keyof ICompany];

type CompanyKeys = keyof ICompany;

const keys: CompanyKeys = "name";

function printDebts<T, K extends keyof T, S extends keyof T>(
	company: T,
	name: K,
	debts: S
) {
	console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

//const hh: ICompany = {
//	name: "HH",
//	debts: 500000,
//};

printDebts(hh, "name", "debts");

const google: ICompany = {
	name: "Google",
	debts: 5000,
	departments: {
		developer: "dev",
	},
	management: {
		owner: "dev",
	},
};

printDebts(google, "name", "debts");

type GoogleKeys = keyof typeof google;
