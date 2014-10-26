function Field(size){
	var fieldSize;
	var elements = [];

	this.create = function(size){
		var wrapper = dom.create("div", "wrapper");

		fieldSize = size;		

		for (var j = 0; j < size; j++) {

			var rowElements = [];

			for (var i = 0; i < size; i++) {

				rowElements.push("");
			};

			elements.push(rowElements);

		};

		this.render();
	};

	this.render = function(settings){
		dom.renderField(elements);
	};

	this.add = function(elem){
		var pos = elem.getPosition();

		elements[pos.x][pos.y] = elem.getElementName();

	};

	this.checkPosition = function(position){

		return elements[position.x][position.y].data;
	};

	this.create(size);

};