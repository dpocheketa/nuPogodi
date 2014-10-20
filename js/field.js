function Field(){
	var fieldSize;
	var elements = [];

	this.create = function(size){
		var wrapper = dom.create("div", "wrapper");

		fieldSize = size;		

		for (var j = 0; j < size; j++) {

			var row = dom.create("div", "row");
			var rowElements = [];

			for (var i = 0; i < size; i++) {

				var cell = dom.create("div", "col");
				row.appendChild(cell);

				rowElements.push(cell);
			};

			elements.push(rowElements);

			wrapper.appendChild(row);
		};

		document.body.appendChild(wrapper);
	};

	this.checkPosition = function(position){

		return elements[position.x][position.y].data;
	};

};