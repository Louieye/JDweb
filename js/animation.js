function animationL(element,target,speed) {	//动画函数
		//如果style中没有的属性，获取时会返回空字符串
		//offsetLeft offsetTop 是只读属性
		var current = element.offsetLeft;
		if(current > target){	//获取动画运动方向
			speed = - Math.abs(speed);
		}
		if (element.timeId) {	//当前元素正在执行动画时再调用无效
			clearInterval(element.timeId);
			element.timeId = null;
		}

		element.timeId = setInterval(function(){
			if(Math.abs(element.offsetLeft - target) < Math.abs(speed)){
				clearInterval(element.timeId);
				element.style.left = target + 'px';
				return;
			}
			element.style.left = element.offsetLeft + speed + 'px';
		},3);
	}
function animationT(element,target,speed) {	//动画函数
		//如果style中没有的属性，获取时会返回空字符串
		//offsetLeft offsetTop 是只读属性
		var current = element.offsetTop;
		if(current > target){	//获取动画运动方向
			speed = - Math.abs(speed);
		}
		if (element.timeId) {	//当前元素正在执行动画时再调用无效
			clearInterval(element.timeId);
			element.timeId = null;
		}
		console.log(element.offsetTop);
		element.timeId = setInterval(function(){
			if(Math.abs(element.offsetTop - target) < Math.abs(speed)){
				clearInterval(element.timeId);
				element.style.top = target + 'px';
				return;
			}
			element.style.top = element.offsetTop + speed + 'px';
		},10);
	}