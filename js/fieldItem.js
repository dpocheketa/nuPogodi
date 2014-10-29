function FieldItem(x, y){

	this.position = {
		x: x,
		y: y
	};

	this.getPosition = function(){
		return this.position;
	};

	this.getElementName = function(){
		return "fieldItem";
	};
};