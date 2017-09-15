function myAjax(obj){
	var arrData = [];
	var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	var method = obj.method.toUpperCase();
	ajax.open(method,obj.url,true);
	if(method = "GET"){
		var body = null;
	}else{
		var body = "";
	}
	ajax.send(body);
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			if(ajax.responseText){
				var obj = JSON.parse(ajax.responseText);
			}else{
				var ret = ajax.responseXML;
			}
		}
		obj.callBack(arrData);
	}
}