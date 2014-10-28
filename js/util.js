var util = {
	getRandomInt: function(max){
		var min = 0;
		var val = Math.floor(Math.random() * (max - min)) + min;

	 	return val;
	},
	randomPos: function(max, fieldItems){
		var pos = {};

		do {

			pos.x = this.getRandomInt(max);
			pos.y = this.getRandomInt(max);

		} while	(!this.empty(pos, fieldItems));


		return pos;
	},
	empty: function(pos, elems){
		var emptyPos = true;

		if (!elems) return true;

		for (var i = 0; i < elems.length; i++) {
			var elemPos = elems[i].getPosition();

			if ((pos.x == elemPos.x) && (pos.y == elemPos.y)) {
				emptyPos = false;
			}
		};
		
		return emptyPos;
	},
	join: function(){
		var result = [];

			for (var i = 0; i < arguments.length; i++) {
				if (arguments[i]) {
					result = result.concat(arguments[i])
				}
			};


		return result;
	},

	increaseAge: function(unit){
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
	}

};