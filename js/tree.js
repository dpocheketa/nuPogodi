function Tree(params){

	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "tree";
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