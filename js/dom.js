var dom = {
	create: function(elem, className){
		var newElem = document.createElement(elem);

		newElem.setAttribute("class", className);

		newElem.attr = function(attrName, attrValue){

			return attrValue ? newElem.setAttribute(attrName, attrValue) : newElem.getAttribute(attrName);
		};

		return newElem;
	}
};