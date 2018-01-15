// JavaScript Document


(function($) {
    "use strict";

//calling foundation js
$(document).foundation();

//calling Brand Crousel
$('.services').owlCarousel({
	loop:true,
	margin:12,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		600:{
			items:2,
			nav:false,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		1000:{
			items:3,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			loop:true
		}
	}
});

var owl = $('.testimonials');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:4000,
	nav:true,
	navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[1000]);
});
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl');
});

//calling Brand Crousel
$('.brand-carousel').owlCarousel({
	loop:true,
	margin:10,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		600:{
			items:3,
			nav:false,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		},
		1000:{
			items:5,
			nav:true,
			navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			loop:true
		}
	}
});


//scroll effect
$(document).ready(function () {
	$("#top").on('click',function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});        

	jQuery('#top').on('click',function (event) {
		event.stopPropagation();                
		var idTo = jQuery(this).attr('data-atr');                
		var Position = jQuery('[id="' + idTo + '"]').offset().top;
		jQuery('html, body').animate({ scrollTop: Position }, 'slow');
		return false;
	});
});
$(window).on('scroll',function() { 
	if($(this).scrollTop() > 1000) { 
		$("#top").fadeIn();
	} else { 
		$("#top").fadeOut();
	}
});

//Animation effect on Dentist social links
$('document').ready(function() {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('.dentist').on('mouseover',function() {
		$(this).children('.dentist-image').children('.dentist-social').addClass('fadeInUp animated').one(animationEnd, function() {
		$(this).removeClass('animated fadeInUp');
		});
	});
});

//Saying page loaded
$(document).ready(function() {
	$(window).on('load',function(){
        $('body').addClass('loaded');
		$('.preloader').html('');
		$('.preloader').css('display', 'none');
     });
});

})(jQuery); //jQuery main function ends strict Mode on 