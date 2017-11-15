//商品列表 ult
$(function(){
	var caizhisId = 0;
	var leibiesId = 0;
	var flag = 1;
	var ult = $("#ult");
	refresh();
	function refresh(){
		$("#ult").html("")
		$.get("fenlei.json",function(data){
			var obj = data;
			var arr = [];
			var arr2 = [];
			var arr3 = [];
			arr = obj.ring;
			if(caizhisId == 0 && leibiesId == 0){
				for(var i=0;i<arr.length;i++){
					arr2.push(arr[i]);
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					var li = $("<li></li>").appendTo("#ult");
					$("<img class='img1'  src="+arr2[i].img+">").appendTo(li);
					$("<h4>"+arr2[i].name+"</h4>").appendTo(li);
					$("<h4>"+arr2[i].fuhao + arr2[i].jiage+"</h4>").appendTo(li);
					$("<h4><span>"+arr2[i].shouchu+"</span><span>"+arr2[i].shouchu1+"</span><span>"+arr2[i].pinlun+"</span><a href='#'>"+arr2[i].pinlun1+"</a></h4>").appendTo(li);					
				}
			}
			
			else if(caizhisId != 0 && leibiesId == 0){
				for(var i=0;i<arr.length;i++){
					if(arr[i].caizhi == caizhisId){
						arr2.push(arr[i]);
					}
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					var li = $("<li></li>").appendTo("#ult");
					$("<img class='img1'  src="+arr2[i].img+">").appendTo(li);
					$("<h4>"+arr2[i].name+"</h4>").appendTo(li);
					$("<h4>"+arr2[i].fuhao + arr2[i].jiage+"</h4>").appendTo(li);
					$("<h4><span>"+arr2[i].shouchu+"</span><span>"+arr2[i].shouchu1+"</span><span>"+arr2[i].pinlun+"</span><a href='#'>"+arr2[i].pinlun1+"</a></h4>").appendTo(li);					
				}	
			}
			
			else if(caizhisId == 0 && leibiesId != 0){
				for(var i=0;i<arr.length;i++){
					if(arr[i].leibie == leibiesId){
						arr2.push(arr[i]);
					}
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					var li = $("<li></li>").appendTo("#ult");
					$("<img class='img1'  src="+arr2[i].img+">").appendTo(li);
					$("<h4>"+arr2[i].name+"</h4>").appendTo(li);
					$("<h4>"+arr2[i].fuhao + arr2[i].jiage+"</h4>").appendTo(li);
					$("<h4><span>"+arr2[i].shouchu+"</span><span>"+arr2[i].shouchu1+"</span><span>"+arr2[i].pinlun+"</span><a href='#'>"+arr2[i].pinlun1+"</a></h4>").appendTo(li);					
				}
			}
			
			else{
				for(var i=0;i<arr.length;i++){	
					if(arr[i].caizhi == caizhisId && arr[i].leibie == leibiesId  ){
						arr2.push(arr[i]);
					}
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					var li = $("<li></li>").appendTo("#ult");
					$("<img class='img1'  src="+arr2[i].img+">").appendTo(li);
					$("<h4>"+arr2[i].name+"</h4>").appendTo(li);
					$("<h4>"+arr2[i].fuhao + arr2[i].jiage+"</h4>").appendTo(li);
					$("<h4><span>"+arr2[i].shouchu+"</span><span>"+arr2[i].shouchu1+"</span><span>"+arr2[i].pinlun+"</span><a href='#'>"+arr2[i].pinlun1+"</a></h4>").appendTo(li);					
				}	
			}
			
			function paixu(flag,arr2){
				if (flag == 1) {
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].shouchu1) < (arr2[j+1].shouchu1)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
				}
				else{
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].pinlun1) <(arr2[j+1].pinlun1)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
				}
				return arr2;
			}
			
		})
	}
	
	
	$(" .ulC li").click(function(){
		var index=  $(this).index()-1;
		$(this).addClass("li1").siblings("li").removeClass("li1")

		caizhisId = index;
		refresh()
	})
	$(" .ulD li").click(function(){
		var index=  $(this).index()-1;
		$(this).addClass("li1").siblings("li").removeClass("li1")

		leibiesId = index;
		refresh()
	}) 
	
	$(".paixu p").click(function(){
		$(this).css({background:"#fff"}).siblings().css({background:"#eee"})
		flag = $(this).index()+1;
		
		refresh()
	})
	  
})  
    