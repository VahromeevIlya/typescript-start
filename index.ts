function processingData<T>(data: T): T {




	return data;
}

const res1 = processingData(1);
const res2 = processingData("1");

const num = 10;

const res3 = processingData<number>(num);

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
	design: 21
}