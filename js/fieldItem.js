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
	}
};