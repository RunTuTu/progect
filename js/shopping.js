$(function(){
	//加号
	$(document).ready(function(){
		$('.add').click(function(){
			var n = $(this).prev().val();
			var num = parseInt(n)+1;
			if (num==0) {
				return;
			}
			$(this).prev().val(num);
		})
	//减号
	$('.reduce').click(function(){
		var n = $(this).next().val();
		var num = parseInt(n)-1;
		if (num==0) {
			return;
		}
		$(this).next().val(num);
	})
	})
	
	$(".allselect,.allselect2").click(function(){
		if ($(this).attr("checked")) {
			$(".gwc_tb input[name=newslist]").each(function(){
				$(this).attr("checked",true)
			});
			getCount();
		}else{
			$(".gwc_tb input[name=newslist]").each(function(){
				if ($(this).attr("checked")) {
					$(this).attr("checked",false);
				}else{
					$(this).attr("checked",true);
				}
			})
			getCount();
		}
	})
	
	$(".delete").click(function(){
		$(".shangpin").eq($(this).val()).hide()
	})
	
})