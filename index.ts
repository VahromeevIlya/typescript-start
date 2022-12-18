const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3];

const readonlyarr: ReadonlyArray<string> = ["123", "32113"];

interface IState {
	readonly data: {
		name: string;
	};
	tag?: string;
}

const state: Partial<IState> = {
	data: {
		name: 'John'
	}
}

strictState.data = 'erwe';

const strictState: Required<IState> = {
	data: {
		name: "Alex"
	},
	tag: 'tag'
}


function action(state: Readonly<IState>) {
	state.data.name = "abs";
}
