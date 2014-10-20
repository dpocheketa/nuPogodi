function Settings(){
	var settingsModel = {
		fieldSize: "Size of the field",
		timeOut: "Timeout beetween Steps",
		treeCount: "Count of trees",
		treeLiveTime: "Time(in steps) of tree`s life",
		bushCount: "Count of bushes",
		bushLiveTime: "Time(in steps) of bush`s life",
		wolfStep: "Wolf cells by step",
		rabbitStep: "Rabbit cells by step",
		gameSteps: "Game Steps"
	};

	var wrapper;
	var form;

	this.createForm = function(){
		wrapper = dom.create("div", "settings-wrap");

		form = dom.create("form", "settings-form");

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
	};

	this.formSubmit = function(){

	};

	this.formValidate = function(){
		return true;
	};

	this.deleteForm = function(){
		wrapper.parentNode.removeChild(wrapper);
	};	

	function createFormRow(name, label){
		var row = dom.create("div", "form-row");
		var inputLabel = dom.create("label", "form-label");
		var input = dom.create("input", "form-input");

		inputLabel.innerHTML = label;
		row.appendChild(inputLabel);

		input.attr("type", "text");
		input.attr("name", name);

		row.appendChild(input);

		return row;
	};

};
