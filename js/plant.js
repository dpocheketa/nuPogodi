function Plant(params){

	var maxAge = params.maxAge;
	var age = params.age;

	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "plant";
	};

	this.getMaxAge = function(){
		return maxAge;
	};

	this.increaseAge = function(){
		newAge = ++age;

		if (age >= maxAge) {
			newAge = null;
		}

		return null;
	};

};