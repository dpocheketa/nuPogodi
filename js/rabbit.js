function Rabbit(params){
	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "rabbit";
	};

	this.findPath = function(wolf, fieldsize, fieldElems){
		var grid = new PF.Grid(fieldsize, fieldsize);

		for (var i = 0; i < fieldElems.length; i++) {
			var pos = fieldElems[i].getPosition();
			grid.setWalkableAt(pos.x, pos.y, false);
		};

		var finder = new PF.AStarFinder({
				allowDiagonal: true
			});
		var wolfCoords = wolf.getPosition();
		var rabbitCoords = this.getPosition();
		var path = finder.findPath(rabbitCoords.x, rabbitCoords.y, fieldsize - wolfCoords.x, fieldsize - wolfCoords.y, grid);

		return path;
	};

	this.run = function(wolf, fieldsize, fieldElems){
		var path = this.findPath(wolf, fieldsize, fieldElems);
//without first item

		path.shift();
		var newPos = path.shift();
		return this.changePosition(newPos);
	};
};









// wolfModel = {
// 	x: 1,
// 	y: 2,
// 	run: function(rabbit, trees, bush){
// 		return path;
// 	}
// }