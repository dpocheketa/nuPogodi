function Tree(params){

	var maxAge = params.maxAge;

	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "tree";
	};

	this.getMaxAge = function(){
		return maxAge;
	};

	this.age = params.age;
};




/*

treeModel = {
	x: 1,
	y: 1,
	age: 5 
}

*/