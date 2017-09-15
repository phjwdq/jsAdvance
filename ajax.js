var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
ajax.open("GET","3.json",true);
ajax.send();
ajax.onreadystatechange = function(){
	if(ajax.readyState == 4 && ajax.status == 200){
		var obj = JSON.parse(ajax.responseText);
	}
}
var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	ajax.open("get","3.json",true);
	ajax.send();
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			var obj = JSON.parse(ajax.responseText);
//			console.log(obj);
			var arr = obj.news;
			console.log(arr);
		}
	}
