
$(function(){
	$(".select label").click(function() {
		console.log(".select label")
	})
	$('html').click(function(e){
		if($(e.target).parents('.select').length < 1){
			$(".select label").removeClass("on");
		}
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
	
});

function popup_open(name){
	$("#"+name).show();
}
function popup_close(name){
	$("#"+name).hide();
}

$(function(){
	$('header .menuBtn').click(function(){
		$("nav").addClass("show");
	});
	$('nav .xBtn').click(function(){
		$("nav").removeClass("show");
	});
});

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