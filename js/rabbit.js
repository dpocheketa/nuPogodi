function Rabbit(params){
	Animal.call(this, params);

	this.getElementName = function(){
		return "rabbit";
	};

	this.findPath = function(wolf, fieldsize, fieldElems){
		var grid = new PF.Grid(fieldsize, fieldsize);
		var wolfCoords = wolf.getPosition();

			grid.setWalkableAt(wolfCoords.x, wolfCoords.y, false);

		for (var i = 0; i < fieldElems.length; i++) {
			var pos = fieldElems[i].getPosition();
			grid.setWalkableAt(pos.x, pos.y, false);
		};

		var finder = new PF.AStarFinder({
				allowDiagonal: true
			});

		var rabbitCoords = this.getPosition();
		var newPoint = this.findPoint(wolfCoords, fieldsize, fieldElems);

		var path = finder.findPath(rabbitCoords.x, rabbitCoords.y, newPoint.x, newPoint.y, grid);

		return path;
	};

	this.run = function(wolf, fieldsize, fieldElems, stepsCount){
		var path = this.findPath(wolf, fieldsize, fieldElems);
		var newPos = path.shift();
//without first item

		for (var i = 0; i < stepsCount; i++) {
			newPos = path.length ? path.shift() : newPos;
		};

		return this.changePosition(newPos);
	};

	this.findPoint = function(wolfCoords, fieldsize, fieldElems){
		var point = {};
		var grid = new PF.Grid(fieldsize, fieldsize);

		for (var i = 0; i < fieldElems.length; i++) {
			var pos = fieldElems[i].getPosition();
			grid.setWalkableAt(pos.x, pos.y, false);
		};

		var finder = new PF.AStarFinder({
				allowDiagonal: true
			});

		point.x = (fieldsize - wolfCoords.x > wolfCoords.x + 1) ? fieldsize - 1 : 0;
		point.y = (fieldsize - wolfCoords.y > wolfCoords.y + 1) ? fieldsize - 1 : 0;

		if (isWalkable(point)) {
			return point;
		} else {
			do {
				var pos = this.getPosition();
				point = util.randomPos(fieldsize, fieldElems);

				var path = finder.findPath(pos.x, pos.y, point.x, point.y, grid);

			} while (!isWalkable(point) && path.length <= 3);
		}

		return point;


		function isWalkable(node){
	
			return grid.nodes[node.x][node.y].walkable
		}
	};
};









// wolfModel = {
// 	x: 1,
// 	y: 2,
// 	run: function(rabbit, trees, bush){
// 		return path;
// 	}
// }