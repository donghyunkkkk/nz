$(document).ready(function(){
	$(".navbar").on("mouseenter click", function(){
	$(".bar").hide();
	$(this).next().stop().slideDown();
	});
	
	$("#nav").mouseleave(function(){
	$(".bar").stop().slideUp();
	$(".last").blur(function(){ 
		$(this).parent().parent().parent().slideUp();});
	});

	setInterval(fading, 2500);
	let i = 2;
	function fading (){
		if($("#slide a").eq(1).css("display") == "none" ){
			$("#slide a").fadeIn();
			i = 2;
		}else{
			$("#slide a").eq(i).fadeOut();
			i--;
		}	

	}
	
});////////////////////////////