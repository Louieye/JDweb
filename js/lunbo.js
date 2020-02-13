//轮播图步骤：
//1.动态生成序号
//2.序号点击切换图片 当前序号高亮显示
//3.鼠标放上去显示箭头，离开隐藏
//4.实现简单上一张下一张图片切换
//5.实现无缝切换
//6.实现自动轮播
//html结构
// <body>
// 	<div class="box" id="box">	轮播图盒子 相对定位
// 		<div class="screen">	轮播图屏幕 相对定位
// 			<ul>				轮播图 一行显示 绝对定位  li浮动
// 				<li><img src="images/lunbo1.jpg" height="400px" width="711px"></li>
// 				<li><img src="images/lunbo2.jpg" height="400px" width="711px"></li>
// 				<li><img src="images/lunbo3.jpg" height="400px" width="711px"></li>
// 				<li><img src="images/lunbo4.jpg" height="400px" width="711px"></li>
// 			</ul>
// 			<ol>				序号标签 绝对定位 动态生成
				
// 			</ol>
// 		</div>
// 		<div class="arr" id="arr">	切换图片 绝对定位
// 			<div class="arr-l" id="arr_l"><i></i></div>
// 			<div class="arr-r" id="arr_r"><i></i></div>
// 		</div>
		
// 	</div>
// 	<div class="by">
// 		<p>by @Louie</p>
// 	</div>
	$(box);
	$(arr);
	$(arr_l);
	$(arr_r);
	var screen = box.children[0];
	var ul = screen.children[0];
	var ol = screen.children[1];
 	var liCount = ul.children.length;	//图片数量
 	var imgWidth = screen.offsetWidth +1;	//轮播图宽度
 	var target = 0;
 	var index = 0;	//li序号
 	//当前序号高亮
 	for (var i = 0; i < liCount; i++) {
 		var li = document.createElement('li');
 		ol.appendChild(li);
 		li.onclick = liClick;	//遍历ol 给所有li添加点击函数
 		if (i === 0) {		//先给第一个标签设置高亮
 			ol.children[0].className = 'current';
 		}
 		li.setAttribute('index',i);		//设置li序号
 	}
 	//无缝切换图片 克隆首尾图
 	var clone = ul.children[0].cloneNode(true);		//true深度克隆 false只克隆元素
 	ul.appendChild(clone);
 	var clone2 = ul.children[liCount - 1].cloneNode(true);
 	ul.appendChild(clone);
 	//显示箭头
 	box.onmouseover = function() {
 		arr.style.display = 'block';
 		clearInterval(timerId);		//鼠标移动到box上停止自动轮播
 	}
 	box.onmouseout = function() {
 		arr.style.display = 'none';
 		timerId = setInterval(function(){	//鼠标离开box启动自动轮播
 		arr_r.click();
 	},4000);
 	}
 	//点击箭头切换图片
 	arr_l.onclick = function() {	//左按钮点击事件
 		if (index === 0) {		//判断当前序号为0 把ul克隆元素移到box位置
 			var x = -liCount * imgWidth;	//ul尾端的位置
 			ul.style.left = x + 'px';	
 			index = liCount;		//序号设置为尾端克隆元素
 		}
 			index--;
 			ol.children[index].click();		//模拟点击事件
 	}
  	arr_r.onclick = function() {	//右按钮点击事件
 		if (index === liCount) {	//判断序号为尾端克隆元素 把ul序号0元素移到box位置
 			ul.style.left = '0px';
 			index = 0;			
 		}
 		if (index === liCount - 1) {	//判断序号为原本元素的最后一个 往后执行一段动画 并遍历ol把第一个标签设置为高亮
 			animation(ul,-(++index) * imgWidth,7);
 			for (var i = 0; i < liCount; i++) {
 				ol.children[i].className = '';
 				ol.children[0].className = 'current';
 			}
 		}else{
 			index++;
 			ol.children[index].click();
 		}
 	}

 	//点击切换图片
 	function liClick() {
 		// if (index === liCount) {
 		// 	ul.style.left = '0px';
 		// 	index = 0;
 		// }
 		for (var i = 0; i < liCount; i++) {		//设置当前点击标签高亮
 			ol.children[i].className = '';
 			this.className = 'current';
 		}
 		index = parseInt(this.getAttribute('index'));	//取得当前序号
 		target = - index * imgWidth;	//根据序号求目标图片位置
 		animation(ul,target,7);
 		console.log(index);
 	}
 	//自动切换图片
 	var timerId = setInterval(function(){
 		arr_r.click();
 	},4000);