$(function(){
	$(".option li").click(function(){
		$(this).addClass("changeImg").siblings().removeClass("changeImg")
		$(".content_right div").removeClass("right_1")
		$(".content_right div").eq($(this).index()).addClass("right_1")
	})
})