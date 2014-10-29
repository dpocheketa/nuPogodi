var settings = new Settings();

var form = settings.createForm();


form.addEventListener("submit", function(e){
	e.preventDefault();

	if (settings.formValidate()) {

		var params = settings.submitForm();
		settings.deleteForm()

		field = new Field();

		controller(params);
	};

});

