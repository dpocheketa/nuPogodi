function controller(settings) {
console.log("settings: ", settings);	

	var field = new Field(settings.fieldSize);
	// init trees:
	var trees = initTrees(settings.treeCount, settings.treeLiveTime, settings.fieldSize);

	var bushes = initBushes(settings.bushCount, settings.bushLiveTime, settings.fieldSize, trees);

	field.render(trees, bushes);
	// dom.renderInfo(settings);

	var timer = setInterval(function(){
		if (settings.gameSteps == 0) {
			clearInterval(timer);
		};

		step();

		console.log(settings.gameSteps--);

	}, settings.timeOut);

	function step(){

		trees = increaseAge(trees);

		if (trees.length < settings.treeCount) {
			var newTrees = initTrees(settings.treeCount - trees.length, settings.treeliveTime, settings.fieldSize, join(trees, bushes));
			trees = join(trees, newTrees);
		}

		bushes = increaseAge(bushes);

		if (bushes.length < settings.bushCount) {
			var newBushes = initBushes(settings.treeCount - trees.length, settings.bushLiveTime, settings.fieldSize, join(trees, bushes));
			bushes = join(bushes, newBushes);
		}

		field.render(trees, bushes);

	// wolf.run();
	// rabbit.run();

	};

	// var stopButton = document.querySelector(".stop-button");

	// 	stopButton.addEventListener("click", function(e){
	// 		e.preventDefault();

	// 		clearInterval(timer)
	// 	});
};

function initBushes(count, liveTime, fieldSize, fieldItems){
	var bushes = [];

	for (var i = 0; i < count; i++) {
		var pos = randomPos(i, fieldSize, join(fieldItems, bushes));

		params = pos;
		params.maxAge = liveTime;
		params.age = 0;

		bushes.push(new Bush(params));
	};

	return bushes;
};

function initTrees(count, liveTime, fieldSize){
	var	trees = [];
	var treeCount = getRandomInt(count);

	for (var i = 0; i < treeCount; i++) {
		var pos = randomPos(i, fieldSize, trees);

		params = pos;
		params.maxAge = liveTime;
		params.age = 0;

		trees.push(new Tree(params));
	};

	return trees;
};

function increaseAge(arr, maxCount, fieldSize){
	var newArr = [];

	for (var i = 0; i < arr.length; i++) {
		arr[i].age++;

		if (arr[i].age > arr[i].getMaxAge()) {
			delete arr[i];
		} else {

			newArr.push(arr[i]);
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
		result = result.concat(arguments[i])
	};

	return result;
};