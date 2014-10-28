function Wolf(params){
	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "wolf";
	};

	this.run = function(rabbit, fieldsize, fieldElems){
		var grid = new PF.Grid(fieldsize, fieldsize);

		for (var i = 0; i < fieldElems.length; i++) {
			var pos = fieldElems[i].getPosition();
			grid.setWalkableAt(pos.x, pos.y, false);
		};

		var finder = new PF.AStarFinder();
		var wolfCoords = this.getPosition();
		var rabbitCoords = rabbit.getPosition();
		var path = finder.findPath(wolfCoords.x, wolfCoords.y, rabbitCoords.x, rabbitCoords.y, grid);

		return path;
	};

	this.moveTo = function(position){

		console.log("pos", this.position);
		// this.position.x = position.x;
		// this.position.y = position.y;

		return this.changePosition(position)
	};

	this.checkRabbit = function(rabbit){
		var wolfCoords = this.getPosition();
		var rabbitCoords = rabbit.getPosition();
		// console.log("checkRabbit: ", rabbit)

		return (wolfCoords.x - rabbitCoords.x <=1) && (wolfCoords.y - rabbitCoords.x <= 1)
	};


};









// wolfModel = {
// 	x: 1,
// 	y: 2,
// 	run: function(rabbit, trees, bush){
// 		return path;
// 	}
// }