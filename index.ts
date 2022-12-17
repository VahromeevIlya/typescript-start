function processingData<T, S>(data: T[], options: S): string {
	data.length;

	switch (typeof data) {
		case "string":
			return `${data}, speed: ${options}`;
		case "number":
			return `${data}, speed: ${options}`;
		default:
			return "Not valid";
	}
}

const res1 = processingData([1], "fast");
const res2 = processingData(["1"], "slow");

const num = 10;

const res3 = processingData<number, string>([num], "str");

interface PrintUK {
	design: number;
}

interface PrintES {
	design: string;
}

interface Print<T> {
	design: T;
}

const somePrint: Print<number> = {
	design: 21,
};

interface DataSaver {
	processing: ProcessingFn;
}

function processing<T>(data: T): T {
	return data;
}

interface ProcessingFn {
	<T>(data: T): T
}

let newFunc: ProcessingFn = processing;

const saver: DataSaver = {
	//processing(data) {
	//	console.log(data);
	//	return data;
	//},
	processing
};
