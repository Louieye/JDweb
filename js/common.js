/*
* @Author: Louieye
* @Date:   2019-12-25 13:52:22
* @Last Modified by:   Louieye
* @Last Modified time: 2019-12-26 14:16:15
*/
//获取元素
	function $(id) {
		return document.getElementById('id');
	}
//设置事件兼容性处理
	function setInnerText(element,data) { //处理textContent 和 innerText兼容性问题
		if (typeof element.innerText === 'string') {
			element.innerText = data;
		}else{
			element.textContent = data;
		}
	}
//注册事件兼容性处理
	function getInnerText(element) { //textContent 和 innerText都显示文本 但有兼容性问题
		if (typeof element.innerText === 'string') {
			return element.innerText;
		}else{
			return element.textContent;
		}
	}
//监听器兼容性处理 event不带on  click  mouseover  mouseout
	function addEventListener(element,event,fn) {
		if(element.addEventListener){
			element.addEventListener(event,fn);
		}else if(element.attachEvent){
			element.attachEvent('on'+event,fn);
		}else{		//不支持注册多个事件
			element['on'+event] = fn;
		}
	}
//移除事件兼容性处理
	function removeEventListener(element,event,fn) {
		if(element.removeEventListener){
			element.removeEventListener(event,fn);
		}else if(element.detachEvent){
			element.detachEvent('on' + event,fn);
		}else{		
			element['on'+event] = null;
		}
	}
//getScroll兼容性处理
	function getScroll(){
		var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		return {
			scrollLeft: scrollLeft,
			scrollTop: scrollTop
		}
	}