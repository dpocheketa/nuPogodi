function Wolf(params){
	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "wolf";
	};

	this.findPath = function(rabbit, fieldsize, fieldElems){
		var grid = new PF.Grid(fieldsize, fieldsize);

		for (var i = 0; i < fieldElems.length; i++) {
			var pos = fieldElems[i].getPosition();
			grid.setWalkableAt(pos.x, pos.y, false);
		};

		var finder = new PF.AStarFinder({
				allowDiagonal: true
			});
		var wolfCoords = this.getPosition();
		var rabbitCoords = rabbit.getPosition();
		var path = finder.findPath(wolfCoords.x, wolfCoords.y, rabbitCoords.x, rabbitCoords.y, grid);

		return path;
	};

	this.run = function(rabbit, fieldsize, fieldElems){
		var path = this.findPath(rabbit, fieldsize, fieldElems);
//without first item
		path.shift();

		var newPos = path.shift();

		return this.changePosition(newPos);
	};

	this.checkRabbit = function(rabbit){
		var wolfCoords = this.getPosition();
		var rabbitCoords = rabbit.getPosition();
		// console.log("checkRabbit: ", rabbit)
		var flag = (Math.abs(wolfCoords.x - rabbitCoords.x)<=1) && (Math.abs(wolfCoords.y - rabbitCoords.y)<=1);

console.log("checkRabbit: ", wolfCoords, rabbitCoords, flag);
		return flag;
	};


};









// wolfModel = {
// 	x: 1,
// 	y: 2,
// 	run: function(rabbit, trees, bush){
// 		return path;
// 	}
// }