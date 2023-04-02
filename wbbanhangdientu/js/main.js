
(function ($) {
	"use Strict";
    jQuery('.hb-menu nav').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    })
 	$('.ht-setting-trigger, .ht-currency-trigger, .ht-language-trigger, .hm-minicart-trigger, .cw-sub-menu').on('click', function (e) {
 		e.preventDefault();
 		$(this).toggleClass('is-active');
 		$(this).siblings('.ht-setting, .ht-currency, .ht-language, .minicart, .cw-sub-menu li').slideToggle();
 	});
 	$('.ht-setting-trigger.is-active').siblings('.catmenu-body').slideDown();
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 300) {
			$('.header-sticky').addClass("sticky");
		} else {
			$('.header-sticky').removeClass("sticky");
		}
	});
	$(document).ready(function() {
		$('.nice-select').niceSelect();
	});

	$(".slider-active").owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		items: 1,
		autoplayTimeout: 10000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		dots: true,
		autoHeight: true,
		lazyLoad: true
	});

	$(".product-active").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		autoplayTimeout: 5000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		item: 5,
		responsive: {
			0: {
					items: 1
			},
			480: {
					items: 2
			},
			768: {
					items: 3
			},
			992: {
					items: 4
			},
			1200: {
					items: 5
			}
		}
	});
	$(".special-product-active").owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		autoplay: false,
		autoplayTimeout: 5000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-left"></i>'],
		item: 4,
		responsive: {
			0: {
					items: 1
			},
			480: {
					items: 1
			},
			768: {
					items: 2
			},
			992: {
					items: 3
			},
			1200: {
					items: 4
			}
		}
	});
   $(".li-countdown")
     .countdown("2019/12/01", function(event) {
       $(this).html(
         event.strftime('<div class="count">%D <span>Days:</span></div> <div class="count">%H <span>Hours:</span></div> <div class="count">%M <span>Mins:</span></div><div class="count"> %S <span>Secs</span></div>')
       );
     });
	$('.product-action a, .social-link a').tooltip({
		animated: 'fade',
		placement: 'top',
		container: 'body'
	});

	$.scrollUp({
		scrollText: '<i class="fa fa-angle-double-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900
	});

	 $('.rx-parent').on('click', function(){
	    $('.rx-child').slideToggle();
	    $(this).toggleClass('rx-change');
	});
	$('.category-heading').on('click', function(){
	    $('.category-menu-list').slideToggle(300);
	});	
	function categorySubMenuToggle() {
	    var screenSize = $(window).width();
	    if ( screenSize <= 991) {
	        $('#cate-toggle .right-menu > a').prepend('<i class="expand menu-expand"></i>');
	        $('.category-menu .right-menu ul').slideUp();
	    } else {
	        $('.category-menu .right-menu > a i').remove();
	        $('.category-menu .right-menu ul').slideDown();
	    }
	}
	categorySubMenuToggle();
	$(window).resize(categorySubMenuToggle);

	function categoryMenuHide(){
	    var screenSize = $(window).width();
	    if ( screenSize <= 991) {
	        $('.category-menu-list').hide();
	    } else {
	        $('.category-menu-list').show();
	    }
	}
	categoryMenuHide();
	$(window).resize(categoryMenuHide);
	$('.category-menu-hidden').find('.category-menu-list').hide();
	$('.category-menu-list').on('click', 'li a, li a .menu-expand', function(e) {
	    var $a = $(this).hasClass('menu-expand') ? $(this).parent() : $(this);
	    if ($a.parent().hasClass('right-menu')) {
	        if ($a.attr('href') === '#' || $(this).hasClass('menu-expand')) {
	            if ($a.siblings('ul:visible').length > 0) $a.siblings('ul').slideUp();
	            else {
	                $(this).parents('li').siblings('li').find('ul:visible').slideUp();
	                $a.siblings('ul').slideDown();
	            }
	        }
	    }
	    if ($(this).hasClass('menu-expand') || $a.attr('href') === '#') {
	        e.preventDefault();
	        return false;
	    }
	});
	$(".li-featured-product-active").owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		margin: 30,
		autoplay: false,
		autoplayTimeout: 5000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-left"></i>'],
		item: 2,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 2
			}
		 }
	 });

	$('.card-header a').on('click', function() {
		 $('.card').removeClass('actives');
		 $(this).parents('.card').addClass('actives');
	});
		$('#showlogin').on('click', function() {
				$('#checkout-login').slideToggle(900);
		});
		$('#showcoupon').on('click', function() {
				$('#checkout_coupon').slideToggle(900);
		});
		$('#cbox').on('click', function() {
				$('#cbox-info').slideToggle(900);
		});

		$('#ship-box').on('click', function() {
				$('#ship-box-info').slideToggle(1000);
		});
	var gallery = $('.li-blog-gallery-slider');
	gallery.slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
					settings: {
						arrows: false,
				}
			},
		]
	});


    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

 var sliderrange = $('#slider-range');
 var amountprice = $('#amount');
 $(function() {
     sliderrange.slider({
         range: true,
         min: 0,
         max: 1200,
         values: [300, 800],
         slide: function(event, ui) {
             amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
         }
     });
     amountprice.val("$" + sliderrange.slider("values", 0) +
         " - $" + sliderrange.slider("values", 1));
 });
 $('.category-sub-menu li.has-sub > a').on('click', function () {
     $(this).removeAttr('href');
     var element = $(this).parent('li');
     if (element.hasClass('open')) {
         element.removeClass('open');
         element.find('li').removeClass('open');
         element.find('ul').slideUp();
     } else {
         element.addClass('open');
         element.children('ul').slideDown();
         element.siblings('li').children('ul').slideUp();
         element.siblings('li').removeClass('open');
         element.siblings('li').find('li').removeClass('open');
         element.siblings('li').find('ul').slideUp();
     }
 });
 
 $('.featured-product-active').owlCarousel({
     loop: true,
     nav: true,
     autoplay: false,
     autoplayTimeout: 5000,
     navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
     item: 3,
     responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 2
        },
        1100: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
 })
 $('.featured-product-active-2').owlCarousel({
     loop: true,
     nav: true,
     autoplay: false,
     autoplayTimeout: 5000,
     navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
     item: 3,
     responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 1
        },
        1100: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
 })
 $('.product-details-images').each(function(){
     var $this = $(this);
     var $thumb = $this.siblings('.product-details-thumbs, .tab-style-left');
     $this.slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        centerMode: false,
        centerPadding: 0,
        asNavFor: $thumb,
    });
 });
 $('.product-details-thumbs').each(function(){
     var $this = $(this);
     var $details = $this.siblings('.product-details-images');
     $this.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
        asNavFor: $details,
    });
 });
 $('.tab-style-left, .tab-style-right').each(function(){
     var $this = $(this);
     var $details = $this.siblings('.product-details-images');
     $this.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        vertical: true,
        centerPadding: 0,
        prevArrow: '<span class="slick-prev"><i class="fa fa-angle-down"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fa fa-angle-up"></i></span>',
        asNavFor: $details,
    });
 });
 $(".cart-plus-minus").append('<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>');
 $(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass('inc')) {
       var newVal = parseFloat(oldValue) + 1;
    } else {
       if (oldValue > 0) {
         var newVal = parseFloat(oldValue) - 1;
         } else {
         newVal = 0;
       }
       }
    $button.parent().find("input").val(newVal);
   });
 	$(".sp-carousel-active").owlCarousel({
 		loop: true,
 		nav: false,
 		dots: false,
 		autoplay: false,
 		autoplayTimeout: 5000,
 		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-left"></i>'],
 		item: 4,
 		responsive: {
 			0: {
 					items: 1
 			},
 			480: {
 					items: 2
 			},
 			768: {
 					items: 2
 			},
 			992: {
 					items: 3
 			},
 			1200: {
 					items: 4
 			}
 		}
 	});
    $(function() {
          $('.star-rating').barrating({
            theme: 'fontawesome-stars'
        });
    });
    $('.venobox').venobox({
        spinner:'wave',
        spinColor:'#cb9a00',
    });
    new WOW().init();
})(jQuery);

