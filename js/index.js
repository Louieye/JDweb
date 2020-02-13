/*
* @Author: Louieye
* @Date:   2019-12-26 15:05:48
* @Last Modified by:   Louieye
* @Last Modified time: 2019-12-27 22:21:15
*/
//回到顶部
$(fixSearchBox);
$(toTop);
window.onscroll = function () {
	// 当拖动滚动条 内容滚出去10px时改变导航栏高度，并显示回到顶部按钮
	//调用common.js getScroll函数，获取页面滚动距离
	var scrollTop = getScroll().scrollTop;
	if (scrollTop > 180) {
		fixSearchBox.style.display = 'block';
		toTop.style.display = 'block';
		animationT(fixSearchBox,0,4);
	}
	if (scrollTop < 175) {
		fixSearchBox.style.display = 'none';
		fixSearchBox.style.top = '-55px';
		toTop.style.display = 'none';
	}
}
//回到顶部
var timerId = null;
toTop.onclick = function() {
	if (timerId) {
		clearInterval(timerId);
		timerId = null;
	}
	
	timerId = setInterval(function() {
	var current = getScroll().scrollTop;
	var step = 40;
	if (current > 0) {
		step = - Math.abs(step);
	}
	if ((current - 0) < Math.abs(step)) {
		clearInterval(timerId);
		document.body.scrollTop = '0px';
		document.documentElement.scrollTop = '0px';
		return;
	}
	current += step;
	document.body.scrollTop = current;
	document.documentElement.scrollTop = current;
	},1)
}