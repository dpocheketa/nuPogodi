var settings = new Settings();

var form = settings.createForm();


form.addEventListener("submit", function(e){
	e.preventDefault();

	if (settings.formValidate()) {

		settings.deleteForm()

		field = new Field();
		field.create(10);
	}

});






