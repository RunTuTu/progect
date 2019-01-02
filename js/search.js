$(function(){	
	//输入关键字
	$(".search").focus(function(){
		  if($(this).val() ==this.defaultValue){  
			  $(this).val("").css("color","#333");           
		  } 
	}).blur(function(){
		 if ($(this).val() == '') {
			$(this).val(this.defaultValue).css("color","#717371");
		 }
	});	
	
	$(".my_ul li a").hover(function(){
		$(this).css("color","#0056A9");
		$(this).css("text-decoration","none")
	},function(){
		$(this).css("color","#666");
	})
	
	
});

