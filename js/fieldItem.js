function FieldItem(x, y){

	var position = {
		x: x,
		y: y
	};

	this.getPosition = function(){
		return position;
	};

	this.getElementName = function(){
		return "fieldItem";
	};

	this.changePosition = function(newPos){
		if (newPos) {

			position.x = newPos[0];
			position.y = newPos[1];

			return position;
		} else return position;
	};
};