function Settings(){
	var settingsModel = {
		fieldSize: {
			fieldName: "Size of the field",
			defaultValue: 10
		},
		timeOut: {
			fieldName: "Timeout beetween Steps",
			defaultValue: 1000
		},
		treeCount: {
			fieldName: "Count of trees",
			defaultValue: 5
		},
		treeLiveTime: {
			fieldName: "Time(in steps) of tree`s life",
			defaultValue: 10
		},
		bushCount: {
			fieldName: "Count of bushes",
			defaultValue: 3
		},
		bushLiveTime: {
			fieldName: "Time(in steps) of bush`s life",
			defaultValue: 5
		},
		wolfStep: {
			fieldName: "Wolf cells by step",
			defaultValue: 5
		},
		rabbitStep: {
			fieldName: "Rabbit cells by step",
			defaultValue: 3
		},
		gameSteps: {
			fieldName: "Game Steps",
			defaultValue: 10
		},
	};

	var form;

	this.createForm = function(){
		
		form = dom.renderForm(form, settingsModel);

		return form;
	};

	this.formValidate = function(){
		return true;
	};

	this.deleteForm = function(){
		dom.deleteForm(form);
	};	

	this.submitForm = function(){
		var params = {};
		for (var key in settingsModel) {
			var value = document.getElementsByName(key)[0].value;
			params[key] = value;
		}

		return params;
	}

};
