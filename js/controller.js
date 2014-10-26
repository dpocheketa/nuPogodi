function controller(settings) {
console.log("settings: ", settings);	

	var field = new Field(settings.fieldSize);
	var trees = initTrees(settings.treeCount, settings.treeLiveTime, settings.fieldSize);
	// init trees:

	field.render(trees);

	// tree.age++;
	// bush.age++;
	// wolf.run();
	// rabbit.run();
	// view(settings);
}

function initTrees(count, liveTime, fieldSize){
	var	trees = [];

	for (var i = 0; i < count; i++) {
		var pos = randomPos(i, fieldSize, trees);

		params = pos;
		params.age = liveTime;

		trees.push(new Tree(params));
	};

	return trees;
};

// todo join any count of arrays to the field items

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
}

function empty(pos, elems){
	var emptyPos = true;

	for (var i = 0; i < elems.length; i++) {
		var elemPos = elems[i].getPosition();

		if ((pos.x == elemPos.x) && (pos.y == elemPos.y)) {
			emptyPos = false;
		}
	};
	

	return emptyPos;
}