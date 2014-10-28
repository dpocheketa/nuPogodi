function Field(size){
	var fieldSize = size;
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

	this.render = function(){
		this.clearField();

		for (var i = 0; i < arguments.length; i++) {
			var elemsArr = arguments[i];

			for (var j = 0; j < elemsArr.length; j++) {
				this.add(elemsArr[j])
			};
		};

		dom.renderField(elements);
	};

	this.add = function(elem){
		var pos = elem.getPosition();

		elements[pos.x][pos.y] = elem.getElementName();

	};

	this.checkPosition = function(position){

		return elements[position.x][position.y].data;
	};

	this.clearField = function(){

		for (var i = 0; i < elements.length; i++) {

			for (var j = 0; j < elements[i].length; j++) {
				elements[i][j] = "";
			};

		};
	};

	this.getSize = function(){
		return fieldSize;
	}

	this.create(size);

};