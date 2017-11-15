
//全局变量
	  	 	$(function(){  
	  	 		 
				var arr = [];
				
				//1, 先获取数据
				$.get("index.json", function(responseData){
					
					arr = responseData.data; 
					/*console.log(arr); */     
					 
		 			//2, 根据数组arr来动态创建节点
					for (var i=0; i<arr.length; i++) {
						var obj = arr[i]; //每个商品对象
						
						var li = $("<li></li>").appendTo("#ul");
						$("<a href='#'><img src="+obj.img+" ></a>").appendTo(li);
						
						
					} 
					  
				})    
				   
				
				//on事件委托给li添加事件
				$("#ul").on("mouseenter", "li", function(){
					var index = $(this).index();
					$(this).css({top:-10})	
				}) 
				$("#ul").on("mouseleave", "li", function(){
					var index = $(this).index();
					$(this).css({top:0})	
				}) 
				
				//on事件委托给li添加事件
				$("#ul").on("click", "li", function(){
					var index = $(this).index(); //li下标	
					var obj = arr[index]; //所点击的商品数据	
					//跳转到详情
					location.href = "../goods/goods.html?id=" + obj.id;  
				}) 
	
				
	  	 	})
				  