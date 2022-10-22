
$(function(){
	$(".select label").on("click", function() {
		console.log(".select label")
	})
	$('header .menuBtn').on("click", function(){
		console.log("header .menuBtn")
		$("nav").addClass("show");
	});
	$('nav .xBtn').click(function(){
		$("nav").removeClass("show");
	});
  $(".select label").on("click", function(){
		$(".select label").removeClass("on");
    	$(this).addClass("on");
    });
	$(".select ul li").on("click", function(){
    	var label = $(this).parent().prev();
		label.text($(this).text());
		label.removeClass("on");
    });
	$('html').click(function(e){
		if($(e.target).parents('.select').length < 1){
			$(".select label").removeClass("on");
		}
	});
});

function popup_open(name){
	$("#"+name).show();
}
function popup_close(name){
	$("#"+name).hide();
}


$(function(){
	$('main .mainArea .scrollBox .tableBox table td').click(function(){
		if($(this).children().hasClass("refBtn") == false){
			$(".detailArea").hide();
			$(".detailTable").show();
		}
	});
	$('.detailArea .xBtn').click(function(){
		$(".detailArea").hide();
	});
});