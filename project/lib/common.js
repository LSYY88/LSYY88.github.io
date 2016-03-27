/*添加类*/
function addClass(obj,targetClass) {
	var classArr=obj.className.split(" ");
	if(!obj.className) {		
		obj.className=targetClass;
		return;
	}
	
	for(var i=0,len=classArr.length;i<len;i++) {		
		if(classArr[i]==targetClass) {
			return;
			break;
		}
	}	
	
	obj.className+=" "+targetClass;
}

/*删除类 removeClass()*/
function removeClass(obj,targetClass) {
	var classArr=obj.className.split(" ");
	   if(!obj.className) {
	   		return;
	   }
	
	   for(var i=0,len=classArr.length;i<len;i++) {
	   	  if(classArr[i]==targetClass) {
		  	  classArr.splice(i,1);
			  obj.className=classArr.join(" ");
			  return;
		  } 
	   
	   }

}

/*获取id*/

function $(obj) {
	//return document.getElementById(obj);
	return typeof obj=="string" ? document.getElementById(obj)  : obj;
	
}



/*绑定事件*/
   
   //obj.on事件=function() {} DOM0
   //obj.addEventListener();  w3c
   //obj.attachEvent();      IE
   //on() 

   function bindEvent(obj,ev,fn) {
   	  if(obj.addEventListener) {
		
		   obj.addEventListener(ev,fn,false);
	  
	  }else if(obj.attachEvent) {		 
	  		obj.attachEvent('on'+ev,function() {
				fn.call(obj);
			});
	  }else {		 
	  	   obj['on'+ev]=fn;
	  }   
   
   }


/*获取屏幕宽度和高度*/

function viewSize() {
	return {
		w:document.documentElement.clientWidth,
		h:document.documentElement.clientHeight
	
	}
}




 














