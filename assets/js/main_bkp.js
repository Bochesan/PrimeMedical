$(document).ready(function(){

	$('.small_slider_left .small_slider').slick();

	$('.small_slider_right .small_slider').slick();

	$('#service_slider').slick({
		draggable: false
	});

	
	
	$('#custom_dots ul li a').click(function(){
		if ($('#custom_dots ul li a').hasClass('towait')) return;
		var aIndex = $(this).attr('data-index');
		$('#custom_dots ul li a').removeClass('active');
		$(this).addClass('active');
		$('.slider_window .slick-dots li button').each(function(){
			var dotIndex = $(this).html();
			if (aIndex == dotIndex) {
				$(this).click();
			}
		});
		$('#custom_dots ul li a').addClass('towait');
		setTimeout("$('#custom_dots ul li a').removeClass('towait')",500);

		return false;
	});

	$('.slider_window .slick-arrow').click(function(){
		activeDot();
	});

	$('.menu_btn').click(function(){
		$('#left_side').addClass('active');
		return false;
	});

	$('.close_menu').click(function(){
		$('#left_side').removeClass('active');
		return false;
	});

	$('.pb_head').click(function(){
		if ($(this).hasClass('active')) {
			$('.pb_head').removeClass('active');
		}
		else {
			$('.pb_head').removeClass('active');
			$(this).addClass('active');
		}
		heightLeftMenu();
	});


	$('.prev_sl').click(function(){
		$('#service_slider .slick-prev.slick-arrow').click();
		return false;
	});

	$('.next_sl').click(function(){
		$('#service_slider .slick-next.slick-arrow').click();
		return false;
	});

	sliderPage(false);
	heightLeftMenu();
	$(window).resize(function(){
		sliderPage(true);
		heightLeftMenu();
	});


});

function scrollActive(delta){
	if ($('.main_window').hasClass('towait')) return;
	if (delta == 1) {
		$('.slider_window').removeClass('active');
		$('.main_window').addClass('active');
	}
	else {
		$('.slider_window').addClass('active');
		$('.main_window').removeClass('active');
	}
	$('.main_window').addClass('towait');
	setTimeout("$('.main_window').removeClass('towait')",1000);
}

function activeDot(){
	var activeDot = $('.slick-dots li.slick-active button').html();
	$('#custom_dots ul li a').each(function(){
		var numCBtn = $(this).attr('data-index');
		if (activeDot == numCBtn) {
			$('#custom_dots ul li a').removeClass('active');
			$(this).addClass('active');
		}
	});
}




function sliderPage(th) {
	if (th) $('#slider_window').slick('unslick');
	if ($(window).width() > 960) {
		$('#slider_window').slick({
			infinite: false,
			arrows: true,
			centerMode: true,
			fade: true,
			dots: true,
			draggable: false,
			adaptiveHeight: false
		});
	}
	else {
		$('#slider_window').slick({
			infinite: false,
			arrows: true,
			centerMode: true,
			fade: true,
			dots: true,
			draggable: false,
			adaptiveHeight: true
		});
	}
}

// $('.your-slider').slick('unslick');


function heightLeftMenu() {
	var heightContent = $('.right_inner_side').height();
	$('.left_side').css({'height' : heightContent})
}