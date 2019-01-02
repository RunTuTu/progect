$(function(){
	$(".option li a").hover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	},function(){
		$(this).removeClass("cur")
	});
	
	
	
	$(".lastLi").mouseover(function(){
		$(".xlliebiao").show()
		$(".lastLi_a").addClass("cur");
	})
	$(".lastLi").mouseout(function(){
		$(".xlliebiao").hide()
		$(".lastLi_a").removeClass("cur");
	})
	
})