/*
* @Author: Windsor
* @Date:   2017-09-18 18:55:41
* @Last Modified by:   Windsor
* @Last Modified time: 2017-09-20 17:21:48
*/
window.onload = function(){
	let circleBotton = document.getElementsByClassName('circle-botton')[0];
	let liButton = circleBotton.getElementsByTagName('li');
	let imgul = document.getElementsByClassName('img')[0];
	let imgW = parseInt(getComputedStyle(imgul, null).width);
	let bannerimg = imgul.getElementsByTagName('li');
	let t = setInterval(move, 3000);
	let num = 0;
	let now = 0;
	let next = 0;
	let flag = true;
	let bannerbox = document.getElementsByClassName('banner')[0];
	let left = document.getElementsByClassName('banner-left')[0];
	let right = document.getElementsByClassName('banner-right')[0];
	/////////////////////////////////////////////////////////////
	/*鼠标移入停止轮播
	  鼠标移出开始轮播
	*/
	bannerbox.onmouseover = function(){
		clearInterval(t);
	}
	bannerbox.onmouseout = function(){
		t = setInterval(move, 3000);
	}
	/////////////////////////////////////////////////////////////
	/*left.onclick = function(){
		clearInterval(t);
		moveL();
	}
	right.onclick = function(){
		clearInterval(t);
		move();
	}*/
	/*
	点击左向左滑
	点击右向右滑
	 */
	left.onclick = function(){
		clearInterval(t);
		if(!flag){
			return;
		}
		move();
		flag = false;
	}
	right.onclick = function(){
		if(!flag){
			return ;
		}
		clearInterval(t);
		moveL();
		flag = false;
	}
	/////////////////////////////////////////////////////////////
	/*function move(){
		num++;
		if(num == liButton.length){
			num = 0;
		}
		for(let j = 0;j < bannerimg.length;j ++){
				// bannerimg[j].style.display = 'none';
				animate(bannerimg[j],{opacity:0});
				liButton[j].style.background = '#16161c';
			}
			// bannerimg[num].style.display = 'block';
			animate(bannerimg[num],{opacity:1});
			liButton[num].style.background = '#79797e';
	}
	function moveL(){
		num--;
		if(num < 0){
			num = bannerimg.length-1;
		}
		for(let j = 0;j < bannerimg.length;j ++){
				// bannerimg[j].style.display = 'none';
				animate(bannerimg[j],{opacity:0});
				liButton[j].style.background = '#16161c';
			}
			// bannerimg[num].style.display = 'block';
			animate(bannerimg[num],{opacity:1});
			liButton[num].style.background = '#79797e';
	}*/
	function move(){
		next ++;
		if(now == bannerimg.length-1){
			next = 0;
		}
		bannerimg[next].style.left = `${imgW}px`;
		liButton[next].style.background = '#16161c';
		animate(bannerimg[now],{left:-imgW});
		liButton[now].style.background = '#16161c';
		animate(bannerimg[next],{left:0},function(){
			flag = true;
		});
		liButton[next].style.background = '#79797e';
		now = next;
	}
	function moveL(){
		if(now == 0){
			next = bannerimg.length;
		}
		next --;
		bannerimg[next].style.left = `${imgW}px`;
		liButton[next].style.background = '#16161c';
		animate(bannerimg[now],{left:-imgW});
		liButton[now].style.background = '#16161c';
		animate(bannerimg[next],{left:0},function(){
			flag = true;
		});
		liButton[next].style.background = '#79797e';
		now = next;
	}
	/////////////////////////////////////////////////////////////
	/*for(let i = 0;i < liButton.length;i ++){
		liButton[i].onclick = function(){
			for(let j = 0;j < bannerimg.length;j ++){
				// bannerimg[j].style.display = 'none';
				animate(bannerimg[j],{opacity:0});
				liButton[j].style.background = '#16161c';
			}
			// bannerimg[i].style.display = 'block';
			animate(bannerimg[i],{opacity:1});
			liButton[i].style.background = '#79797e';
			num = i;
		}
	}*/
	for(let i = 0;i < liButton.length;i ++){
		liButton[i].onclick = function(){
			if(now == i){
				return;
			}
			bannerimg[i].style.left = `${imgW}px`;
			liButton[i].style.background = '#16161c';
			animate(bannerimg[now],{left:-imgW});
			liButton[now].style.background = '#16161c';
			animate(bannerimg[i],{left:0});
			liButton[i].style.background = '#79797e';
			now = next = i;
		}
	}
	/////////////////////////////////////////////////////////////
	/*for(var i = 0;i < liButton.length;i ++){
		liButton[i].index = i;//当使用var需要保存变量时，添加一个属性
		bannerimg[i].index = i;//当使用var需要保存变量时，添加一个属性
		liButton[i].onclick = function(){
			bannerimg[now].style.display = 'none';
			liButton[now].style.background = '#16161c';
			bannerimg[this.index].style.display = 'block';
			liButton[this.index].style.background = '#79797e';
			now = this.index;
		}
	}*/
	/*      let now = 0;
			bannerimg[now].style.display = 'none';
			liButton[now].style.background = '#16161c';
			bannerimg[i].style.display = 'block';
			liButton[i].style.background = '#79797e';
			now = i;*/
			/*bannerimg[i].style.display = 'block';
			liButton[i].style.background = '#79797e';
			for(let j = 0;j < i;j++){
				bannerimg[j].style.display = 'none';
				liButton[j].style.background = '#16161c';
			}
			for(let j = i+1;j < bannerimg.length;j ++){
				bannerimg[j].style.display = 'none';
				liButton[j].style.background = '#16161c';
			}*/	
}