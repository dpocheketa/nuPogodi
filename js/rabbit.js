function Rabbit(params){
	FieldItem.apply(this, [params.x, params.y]);

	this.getElementName = function(){
		return "rabbit";
	};

	this.run = function(rabbit, trees, bush){
		console.log(arguments);
	};
};









// wolfModel = {
// 	x: 1,
// 	y: 2,
// 	run: function(rabbit, trees, bush){
// 		return path;
// 	}
// }