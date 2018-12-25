$().ready(function(){
	
	var curPage =$("#currentPage").val();
	var last =$("#totalPage").val();
	var page =Math.ceil(curPage/5);  //函数返回大于或等于一个给定数字的最小整数
	//调用绘制分页样式函数
	drawpage(page,curPage);
	
	//绑定点击页码事件
	$(document).on("click",".paginationbox li a",function(){
		var str =$(this).html();
		if(!isNaN(str)){
			//移除之前的currtive
			$(".paginationbox li a").removeClass("currtive");
			$(this).attr("class","currtive");
			$("#currentPage").val(str);
			drawstatic(parseInt(str));
		}
	});
	
	//绑定下一页点击事件
	$(document).on("click","#nextPage",function(){
		var num =$(".currtive").html();
		var curPage =$("#currentPage").val();
		var last =$("#totalPage").val();
		var page =Math.ceil((parseInt(num))/5);
		if(num < page*5 && num != last){
			//移除之前的currtive
			$(".paginationbox li a").removeClass("currtive");
			$("#"+(parseInt(num)+1)+"").attr("class","currtive");
			//$(".paginationbox li a[text="+(parseInt(num)+1)+"]").attr("class","currtive");//jQ1.6支持
			$("#currentPage").val(parseInt(num)+1);
			drawstatic(parseInt(num)+1);
		}else if(num == page*5 && num != last){
			//清空之前的数据
			$(".paginationbox").html("");
			drawpage(page+1,(parseInt(num)+1));
		}
	})
	
	//绑定上一页点击事件
	$(document).on("click","#previousPage",function(){
		var num =$(".currtive").html();
		var curPage =$("#currentPage").val();
		var last =$("#totalPage").val();
		var page =Math.ceil((parseInt(num))/5);
		if(num <= page*5 && num != (page-1)*5+1){
			//移除之前的currtive
			$(".paginationbox li a").removeClass("currtive");
			$("#"+(parseInt(num)-1)+"").attr("class","currtive");
			//$(".paginationbox li a[text="+(parseInt(num)+1)+"]").attr("class","currtive");//jQ1.6支持
			$("#currentPage").val(parseInt(num)-1);
			drawstatic(parseInt(num)-1);
		}else if(num == (page-1)*5+1 && num != 1){
			//清空之前的数据
			$(".paginationbox").html("");
			drawpage(page-1,(parseInt(num)-1));
		}
	})
	
	//绘制页面分页样式
	function drawpage(page,curPage){
		//页面中的当前面
		var page =page;
		//后台传过来的页数
		var curPage = curPage;
		//后台传过来的总页数
		var datas =$("#totalPage").val();
		//每面显示多少条数据
		var pageSize =5;
		//在网页中一共要分多少面
		var totalPage = Math.floor((datas-1)/pageSize+1);

		//显示div数组化
		var mypagetion = [];
		mypagetion[0] = "nopage";
		for (i=1; i<=datas; i++) {
			mypagetion[i] = ".pagetion"+ i;
			$(mypagetion[i]).hide();
		}
		
		var liStr ="<li><a id='previousPage' href='#'>«</a></li>";
		$("#currentPage").val(curPage);
		if(page <= totalPage){
			if(datas <= 5){
				for(i=1; i<=datas; i++){
					//为当前页增加样式
					var currtive ="";
					if(i==curPage){
						currtive=" class='currtive' ";
						$(mypagetion[i]).show();
					}
					liStr +=" <li><a id="+i+" "+currtive+" href='#'>"+i+"</a></li>"
				}
			}else{
				var start =pageSize*(page-1)+1;
				var end =page*pageSize;
				if(page == totalPage){
					for(i=start; i<=datas; i++){
						//为当前页增加样式
						var currtive ="";
						if(i==curPage){
							currtive=" class='currtive' ";
							$(mypagetion[i]).show();
						}
						liStr +=" <li><a id="+i+" "+currtive+" href='#'>"+i+"</a></li>";						
					}
				}else{
					for(i=start; i<=end; i++){
						//为当前页增加样式
						var currtive ="";
						if(i==curPage){
							currtive=" class='currtive' ";
							$(mypagetion[i]).show();
						}
						liStr +=" <li><a id="+i+" "+currtive+" href='#'>"+i+"</a></li>";
					}
				}
			}
		}
		liStr +="<li><a id='nextPage' href='#'>»</a></li>";
		$(".paginationbox").append(liStr);
	}

	//绘制页面分页样式
	function drawstatic(curPage){
		//后台传过来的总页数
		var datas =$("#totalPage").val();
		//显示div数组化
		var mypagetion = [];
		mypagetion[0] = "nopage";
		for (i=1; i<=datas; i++) {
			mypagetion[i] = ".pagetion"+ i;
			$(mypagetion[i]).hide();
		}
		$(mypagetion[curPage]).show();

	}
})