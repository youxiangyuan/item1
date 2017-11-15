
$(function(){
	
				function $(id){
					return document.getElementById(id);
				}
								
				//在中等图上移动
				$("middleImg").onmousemove = function(e){
					e = e || event;
					
					//显示中等区域和大区域
					$("middleArea").style.display = "block";
					$("bigArea").style.display = "block";
					
					//放大系数
					var scale = $("bigImg").offsetHeight/$("middleImg").offsetHeight;
					
					//计算小区域跟随鼠标移动
					var x = e.pageX - $("box").offsetLeft - $("middleImg").offsetLeft - $("middleArea").offsetWidth/2;
					var y = e.pageY - $("box").offsetTop - $("middleImg").offsetTop - $("middleArea").offsetHeight/2;
					
					//判断边界
					if (x <= 0) x = 0;
					else if (x >= $("middleImg").offsetWidth-$("middleArea").offsetWidth) {
						x = $("middleImg").offsetWidth-$("middleArea").offsetWidth
					}
					if (y <= 0) y = 0;
					else if (y >= $("middleImg").offsetHeight-$("middleArea").offsetHeight) {
						y = $("middleImg").offsetHeight-$("middleArea").offsetHeight
					}
					//移动中等区域
					$("middleArea").style.left = x + 'px';
					$("middleArea").style.top = y + 'px';
					
					//移动大图
					$("bigImg").style.left = -x*scale + "px";
					$("bigImg").style.top = -y*scale + "px";
					
				}
				
				//移出中等图片
				$("middleImg").onmouseleave = function(){
					//隐藏中等区域和大区域
					$("middleArea").style.display = "none";
					$("bigArea").style.display = "none";
				}
				
				//点击小图片
				var ali = $("small").getElementsByTagName("li");
				for (var i=0; i<ali.length; i++) {
					ali[i].onmousemove = function(){
						var src = this.children[0].getAttribute("src");
						$("middleImg").children[0].src = src.replace('_1', '_2'); 
						$("bigImg").src = src.replace('_1', '_3'); 
					}
				}	
				
})
				
				
	
			 