$(function(){
	$("#header .tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("static");
		$(".gnb").toggleClass("active");
		$("#start").addClass("on");
	});
	$("a.login_close").click(function(){
		$("body").toggleClass("static");
		$(".gnb").toggleClass("active");
		$("#start").removeClass("on");
	});
	$("#GNB > ul > li").click(function(e){
		e.preventDefault(e);
		if($(this).hasClass("active") == false){
			$(this).removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
	
	$(".keyvisual").mobileDragEvent2({total:4});

	$(".top_tab a").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 300);
	});
});