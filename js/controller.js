function controller(settings) {
console.log("settings: ", settings);	

	var field = new Field(settings.fieldSize);
	var fieldSize = field.getSize();
	var trees = {
		liveTime: settings.treeLiveTime,
		maxCount: settings.treeCount,
		arr: [],
		create: function(fieldItems){
			var treeCount = util.getRandomInt(this.maxCount - this.arr.length);

				for (var i = 0; i < treeCount; i++) {
					var pos = util.randomPos(fieldSize, util.join(this.arr, fieldItems));

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
			var bushCount = util.getRandomInt(this.maxCount - this.arr.length);

				for (var i = 0; i < bushCount; i++) {
					var pos = util.randomPos(fieldSize, util.join(this.arr, fieldItems));
					
					params = pos;
					params.maxAge = this.liveTime;
					params.age = 0;

					this.arr.push(new Bush(params));
				};

			return this;
		}
	};
	var rdmPos = util.randomPos(fieldSize);
	var wolf = new Wolf(rdmPos);
	var rabbitParams = util.randomPos(fieldSize, wolf);
	var rabbit = new Rabbit(rabbitParams);

	trees.create(bushes.arr, wolf, rabbit);
	bushes.create(trees.arr, wolf, rabbit);

	field.render(trees.arr, bushes.arr, [wolf, rabbit]);
	// dom.renderInfo(settings);

	var timer = setInterval(function(){
		if (settings.gameSteps == 0) {
			clearInterval(timer);
		};

		step();

		console.log(settings.gameSteps--);

	}, settings.timeOut);

	function step(){

		trees.arr = util.increaseAge(trees);
		trees.create(bushes.arr);

		bushes.arr = util.increaseAge(bushes);
		bushes.create(trees.arr);

		field.render(trees.arr, bushes.arr, [wolf, rabbit]);

	// wolf.run();
	// rabbit.run();

	};

	// var stopButton = document.querySelector(".stop-button");

	// 	stopButton.addEventListener("click", function(e){
	// 		e.preventDefault();

	// 		clearInterval(timer)
	// 	});
};
