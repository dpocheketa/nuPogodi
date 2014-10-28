function controller(settings) {
console.log("settings: ", settings);	

	var field = new Field(settings.fieldSize);
	var fieldSize = field.getSize();
	var trees = {
		liveTime: settings.treeLiveTime,
		maxCount: settings.treeCount,
		arr: [],
		create: function(fieldItems){
			var treeCount = getRandomInt(this.maxCount - this.arr.length);

				for (var i = 0; i < treeCount; i++) {
					var pos = randomPos(i, fieldSize, join(this.arr, fieldItems));

					params = pos;
					params.maxAge = this.liveTime;
					params.age = 0;

					this.arr.push(new Tree(params));
				};

			return this;
		}
	};

	var bushes = {
		liveTime: settings.bushLiveTime,
		maxCount: settings.bushCount,
		arr: [],
		create: function(fieldItems){
			var bushCount = getRandomInt(this.maxCount - this.arr.length);

				for (var i = 0; i < bushCount; i++) {
					var pos = randomPos(i, fieldSize, join(this.arr, fieldItems));
					
					params = pos;
					params.maxAge = this.liveTime;
					params.age = 0;

					this.arr.push(new Bush(params));
				};

			return this;
		}
	};

	trees.create(bushes.arr);
	bushes.create(trees.arr);


	field.render(trees.arr, bushes.arr);
	// dom.renderInfo(settings);

	var timer = setInterval(function(){
		if (settings.gameSteps == 0) {
			clearInterval(timer);
		};

		step();

		console.log(settings.gameSteps--);

	}, settings.timeOut);

	function step(){

		trees.arr = increaseAge(trees);

		trees.create(bushes.arr);

		bushes.arr = increaseAge(bushes);

		bushes.create(trees.arr);

		field.render(trees.arr, bushes.arr);

	// wolf.run();
	// rabbit.run();

	};

	// var stopButton = document.querySelector(".stop-button");

	// 	stopButton.addEventListener("click", function(e){
	// 		e.preventDefault();

	// 		clearInterval(timer)
	// 	});
};


function increaseAge(unit){
	var newArr = [];

	for (var i = 0; i < unit.arr.length; i++) {
		unit.arr[i].age++;

		if (unit.arr[i].age > unit.arr[i].getMaxAge()) {
			delete unit.arr[i];
		} else {

			newArr.push(unit.arr[i]);
		};
	};

	return newArr;
};

function randomPos(i, max, fieldItems){
	var pos = {};

	do {

		pos.x = getRandomInt(max);
		pos.y = getRandomInt(max);

	} while	(!empty(pos, fieldItems));


	return pos;
};

function getRandomInt(max){
	var min = 0;
	var val = Math.floor(Math.random() * (max - min)) + min;

 	return val;
};

function empty(pos, elems){
	var emptyPos = true;

	for (var i = 0; i < elems.length; i++) {
		var elemPos = elems[i].getPosition();

		if ((pos.x == elemPos.x) && (pos.y == elemPos.y)) {
			emptyPos = false;
		}
	};
	
	return emptyPos;
};

function join(){
	var result = [];

		for (var i = 0; i < arguments.length; i++) {
			if (arguments[i]) {
				result = result.concat(arguments[i])
			}
		};


	return result;
};