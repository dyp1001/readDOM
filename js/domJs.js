// JavaScript Document

function getAttributes(element){
	var el =element.attributes;
	var obj = {};
	for (var i = 0;i < el.length; i++) {
		obj[el[i].name] = el[i].value;
		//console.log([el[i].name]+"="+ el[i].value);
	}
	
	return obj;
}



var mainDom= document.getElementsByTagName("div");

var mainDom1 = createDom(document.getElementsByTagName('body')[0]);
console.log(mainDom1);	

function createDom(dom){
	
		var tempObj = {};
		tempObj.tag=dom.tagName;
		if(dom.hasAttribute){
			temObj = getAttributes(dom);
		}

		tempObj['children'] = [];
		
		var count = dom.childElementCount;
		console.log("child count: "+count);
		//console.log("child: "+dom.childNodes);
		/*for(var i=0; i<dom.childNodes.length; i++){
			console.log(dom.childNodes[i].data);
		}*/
		if(count && dom.childNodes[0] =="undefined" && dom.childNodes[0].data.trim()!="" ){
			console.log("content: "+dom.childNodes[0].data.trim());
			tempObj.content =  dom.childNodes[0].data.trim();
		}
		
		for(var i =0;i<count;i++){
			var child = dom.children[i];
			var child_dom = createDom(child);
			tempObj['children'].push(child_dom);
		}
		
		return tempObj;
}