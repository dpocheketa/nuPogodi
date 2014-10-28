function Bush(params){
	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "bush";
	};

	this.age = params.age;

	var maxAge = params.maxAge;

	this.getMaxAge = function(){
		return maxAge;
	};
};