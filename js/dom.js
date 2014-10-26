var dom = {
	create: function(elem, className){
		var newElem = document.createElement(elem);

		newElem.setAttribute("class", className);

		newElem.attr = function(attrName, attrValue){

			return attrValue ? newElem.setAttribute(attrName, attrValue) : newElem.getAttribute(attrName);
		};

		return newElem;
	}, 
	renderField: function(elements){
		this.deleteField();

		var wrapper = dom.create("div", "wrapper");

		for (var j = 0; j < elements.length; j++) {

			var row = dom.create("div", "row");

			for (var i = 0; i < elements[j].length; i++) {

				var className = elements[i][j];
				var cell = dom.create("div", className + " col");

				row.appendChild(cell);

			};

			wrapper.appendChild(row);
		};

		document.body.appendChild(wrapper);
	},
	renderForm: function(form, settingsModel){
		var wrapper = dom.create("div", "settings-wrap");

		var form = dom.create("form", "settings-form");

		for (var key in settingsModel) {
			var row = createFormRow(key, settingsModel[key]);
			form.appendChild(row);
		};

		var submit = dom.create("button", "submit-button");
		submit.attr("type", "submit");
		submit.innerHTML = "Let`s Start";

		form.appendChild(submit);
		wrapper.appendChild(form);
		document.body.appendChild(wrapper);

		return form;
	},
	deleteForm: function(form){
		var wrapper = form.parentNode;
		wrapper.parentNode.removeChild(wrapper);
	},
	deleteField: function(){
		var wrapper = document.querySelector(".wrapper");

		if (wrapper) document.body.removeChild(wrapper);
	}
};

function createFormRow(name, data){

	var row = dom.create("div", "form-row");
	var inputLabel = dom.create("label", "form-label");
	var input = dom.create("input", "form-input");

	inputLabel.innerHTML = data.fieldName;
	row.appendChild(inputLabel);

	input.attr("type", "text");
	input.attr("name", name);
	input.attr("value", data.defaultValue);

	row.appendChild(input);

	return row;
};