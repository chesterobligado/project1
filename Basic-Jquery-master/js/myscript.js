// JavaScript Document
$(function(){
//$("#button1").hide(300).delay(300).show(300).delay(300).hide(300).delay(300).show(300);
});

$(function(){
//$("h2").css({color:"red"});
});

$(function(){
//$('#button1').html('Button 1');
});

$(function(){
//$('#button2').html('<strong>Button 2</strong>');
});

$(function(){
//	$("#button1").on('click', function(){
//		$("#card1").fadeToggle(300);
//		});
});

$(function(){
//	$("#button2").on('click', function(){
//		$("#card2").slideToggle(300);
//		});
});

$(function(){
//	$("#button3").on('click', function(){
//		$("#card3").toggle(300);
//		});
});

$(function(){
	$("#cardbtn1").on('click', function(){
		$("#card1").hide(300);
		});
});

$(function(){
	$("#cardbtn2").on('mouseover', function(){
		$("#card2").hide(300);
		});
});

$(function(){
	$("#cardbtn3").on('click', function(){
		$("#card3 .card-text").toggle(300);
		});
});

$(function(){
	$(".jbutton").on('click', function(){
		var panelId = $(this).attr('data-panelid');
		//alert(panelId);
		$('#'+panelId).toggle(100);
		});
});


