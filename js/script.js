var dom = {
	create: function(elem, className){
		var newElem = document.createElement(elem);

		newElem.setAttribute("class", className);

		return newElem;
	}
};

function Field(){

	this.create = function(width, height){
		var wrapper = dom.create("div", "wrapper");

		for (var j = 0; j < height; j++) {

			var row = dom.create("div", "row");

			for (var i = 0; i < width; i++) {
				var cell = dom.create("div", "col");
				row.appendChild(cell);
			};

			wrapper.appendChild(row);
		};

		document.body.appendChild(wrapper);
	};

};

var field = new Field();

field.create(10,10);