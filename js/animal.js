function Animal(params){
	FieldItem.apply(this, [params.x, params.y]);

	this.changePosition = function(newPos){

		if (newPos) {
			pos = {};

			this.position.x = newPos[0];
			this.position.y = newPos[1];

			return pos;
		} else return this.getPosition();
	};

	this.run = function(){
		var pos = this.getPosition();
		return this.changePosition(pos);
	};

	this.getElementName = function(){
		return "animal";
	};
};