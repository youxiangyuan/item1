$(function(){
							
	//刷新， 重新从cookie中获取最新的数据，并用节点显示
	refreshUI();
	function refreshUI(){
		
		//获取购物车cookie商品
		var arr = $.cookie("cart");
		if (arr) {
			//如果数组不为undefined,则解析
			arr = JSON.parse(arr);
			  
			//先移除旧节点
			$(".ul2").empty();
			
			//然后再显示最新的cookie数据
			//创建节点， 显示购物车商品
			var totals = 0;
			var total2s = 0;
			var nums = 0;
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				  
				//创建li
				var li = $("<li></li>").appendTo(".ul2");
				
				if ( obj.checked ) {
					$('<input class="ckbox" type="checkbox" checked="checked" />').appendTo(li);
				}
				else {
					$('<input class="ckbox" type="checkbox" />').appendTo(li);
				}
				
				$('<img class="img" src='+ obj.img +' >').appendTo(li);
				$('<span class="name">'+ obj.name +'</span>').appendTo(li);
				$('<span class="name2">'+ obj.pinming1 +'</span>').appendTo(li);
				$('<span class="span1">'+obj.shoucun1+'</span>').appendTo(li);	
				$('<span class="price">'+ obj.unit + obj.price +'</span>').appendTo(li);
				$('<a class="del" href="javascript:;">删除</a>').appendTo(li);			
				//将勾选的商品价格进行累加
				if (obj.checked) {
					totals += obj.price*obj.num; 
					total2s += obj.price*obj.num; 
					nums += obj.num;
					$("#span").html(nums); 
					$.cookie("nmb",JSON.stringify($("#span").html()), {expires:30, path:"/"});
					/*console.log($.cookie("nmb"))*/
				} 
			} 
			  
			//显示总价 
			$("#total").html(totals);
			$("#total2").html(total2s);
			
			
		}
		/*else { 
			alert("购物车为空"); 
		}*/
	}
	
	 
	//删除
	$(".ul2").on("click", ".del", function(){
		$("#span").html(0); 
		$("#spo").html(0);
		//获取原来的cookie
		var cookieArr = JSON.parse( $.cookie("cart") );
		var index = $(this).index(".ul2 .del");
		
		//修改cookie 
		cookieArr.splice(index, 1);
		
		$.cookie("nmb",JSON.stringify($("#span").html()), {expires:-1, path:"/"});
		
		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
		
		//判断是否全选了
		isAllChecked();
		
		//刷新UI
		refreshUI();
	});
	
	
	
	//勾选
	$(".ul2").on("click", ".ckbox", function(){
		//获取原来的cookie
		var cookieArr = JSON.parse( $.cookie("cart") );
		var index = $(this).index(".ul2 .ckbox");
		
		//修改cookie
		cookieArr[index].checked = !cookieArr[index].checked;
		
		

		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
		
		//判断是否全选了
		isAllChecked();
		
		//刷新UI
		refreshUI();
	})  
	
	
	//判断是否全选了
	isAllChecked();
	function isAllChecked(){
		//如果没有cookie,则直接返回
		if ( !$.cookie("cart") ){
			return;
		}
		var cookieArr = JSON.parse( $.cookie("cart") );
		
		var sum = 0;
		for (var i=0; i<cookieArr.length; i++) {
			sum += cookieArr[i].checked;
		}
		
		//全选了
		if (cookieArr.length!=0 && sum==cookieArr.length) {
			$("#allCheck").prop("checked", true);
		} 
		else { //没有全选
			$("#allCheck").prop("checked", false);
		}
		
	}
	
	

	
	
	//删除选中
	$(".a1").click(function(){
		$("#span").html(0); 
		$("#spo").html(0);
		//如果没有cookie,则直接返回
		if ( !$.cookie("cart") ){
			return;
		}
		var cookieArr = JSON.parse( $.cookie("cart") );
		
		//遍历cookieArr
		var newArr = [];
		for (var i=0; i<cookieArr.length; i++){
			if (cookieArr[i].checked == false) {
				newArr.push(cookieArr[i]);
			}
		}
		
		
$.cookie("nmb",JSON.stringify($("#span").html()), {expires:-1, path:"/"});
		//重新存入最新的cookieArr,替换原来的cookie
		$.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});
		
		//刷新UI
		refreshUI();
	})
})	 