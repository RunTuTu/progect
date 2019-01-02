$(function(){
	$(".ull li").click(function(){
		$(this).css("border","2px solid red").siblings().css("border","1px solid #C1B9B9")
		$(".ull li b").eq($(this).index()).show().siblings(".ull li b").hide()
		
	})
	
	$(".ull2 li").click(function(){
		$(this).css("border","2px solid red").siblings().css("border","1px solid #C1B9B9")
		$(".ull2 li b").eq($(this).index()).addClass("xiaotu").siblings("b").hide()
		$(".xiaotu").eq($(this).index()).show().siblings("b").hide();
	})
	
	//加号	
		$('.jia').click(function(){
			var n = $(this).prev().val();
			var num = parseInt(n)+1;
			if (num==0) {
				return;
			}
			$(this).prev().val(num);
		})
	//减号
	$('.jian').click(function(){
		var n = $(this).next().val();
		var num = parseInt(n)-1;
		if (num==0) {
			return;
		}
		$(this).next().val(num);
	})
	
	
	$(".goodsThe li").click(function(){
		$(this).addClass("xxCurrent").siblings("li").removeClass("xxCurrent")
		$(".detailsCon_Bot_R div").eq($(this).index()).show().siblings("div").hide()
	})
	
	
})