var settings = new Settings();

var form = settings.createForm();


form.addEventListener("submit", function(e){
	e.preventDefault();

	if (settings.formValidate()) {

		var params = settings.submitForm();
		settings.deleteForm()

		field = new Field();
		// field.create(10);	

		controller(params);
	};

});






console.log(new Tree({x: 2, y: 4, age: 10}))
console.log(new Bush({x: 2, y: 4, age: 10}))