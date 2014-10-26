function controller(settings) {

	var field = new Field(settings.fieldSize);


	// init trees:

	field.add(new Tree({
		x: 0,
		y: 0,
		age: 5
	}));

	field.add(new Bush({
		x: 3,
		y: 9,
		age: 2
	}));

	field.render(settings);

	// tree.age++;
	// bush.age++;
	// wolf.run();
	// rabbit.run();
	// view(settings);
}

