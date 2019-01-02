$(function(){
    $(window).scroll(function(){
    	if ($(window).scrollTop()>100){
    		$(".returnTop").fadeIn(500);
      	}else{
      		$(".returnTop").fadeOut(500);
        }
    });
 
            //当点击跳转链接后，回到页面顶部位置
 
            $(".returnTop").click(function(){
                $('body,html').animate({scrollTop:0},500);
                return false;
            });
        });
 