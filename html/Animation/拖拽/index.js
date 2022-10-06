// 控件template容器
let content = document.getElementById("template")
let target = document.getElementById("target")

/**
 * @param {Event} e  
 * @param {触发事件节点} el 
 * @description  设置拖拽后节点的位置
 */


function setEventPosition(e, el) {
	//鼠标按下，计算鼠标触点距离元素左侧的距离
	let disX = e.clientX - el.offsetLeft;
	let disY = e.clientY - el.offsetTop;
	let tp = el.cloneNode(true)

	el.onmousemove = function (e) {
		//计算需要移动的距离
		let t = e.clientX - disX;
		let h = e.clientY - disY;
		//移动当前元素
		if (t >= 0 && t <= window.innerWidth - el.offsetWidth) {
			el.style.left = t + 'px';
			el.style.top = h + 'px';
		}
	};
	//鼠标松开时，注销鼠标事件，停止元素拖拽。
	el.onmouseup = function (e) {
		el.onmousemove = null;
		el.onmouseup = null;
		console.log('el', el.style.left);
		if (Number(el.style.left.split('px')[0]) > 200) {
			content.appendChild(tp)
			tp.onmousedown = e => setEventPosition(e, tp)
		}
	};
}

function isMouseLeaveOrEnter(e, handler) {
	if (e.type != 'mouseout' && e.type != 'mouseover') return false;
	var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;
	while (reltg && reltg != handler)
		reltg = reltg.parentNode;
	return (reltg != handler);
}


window.onload = () => {
	content.childNodes.forEach(it => {
		it.onmousedown = (e) => setEventPosition(e, it)
	})

}