function Bush(params){
	
	var maxAge = params.maxAge;

	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "bush";
	};

	this.getMaxAge = function(){
		return maxAge;
	};

	this.age = params.age;
};