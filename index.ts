
enum Directions {
	TOP,
	RIGHT,
	BOTTOM,
	LEFT
}

enum TimingFunction {
	EASE = 'ease',
	EASE_IN = 'ease-in',
	LINEAR = 'linear'
}

function frame(elem: string, dir: Directions, tFunc: TimingFunction): void {
	if(dir === Directions.RIGHT) {
		console.log(tFunc);
	}
}	
frame('id',Directions.RIGHT,TimingFunction.EASE);
