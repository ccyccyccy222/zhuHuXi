(function($) {

	"use strict";


    /*------------------------------------------
        = Slicknav
    -------------------------------------------*/

    function slicknav() {
      $('#menu').slicknav();  
    }


    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function() {

                //active wow
                wow.init();

            });
        }
    }


    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize     = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue   = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover"
                });

                if ( window.innerWidth < 780) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }

     // Hero slider background setting
    function sliderBgSetting() {
        if ($(".hero-slider .slide").length) {
            $(".hero-slider .slide").each(function() {
                var $this = $(this);
                var img = $this.find(".slider-bg").attr("src");

                $this.css({
                    backgroundImage: "url("+ img +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }


    //Setting hero slider
    function heroSlider() {
        if ($(".hero-slider").length) {
            $(".hero-slider").slick({
                autoplay: true,
                autoplaySpeed: 8000,
                arrows: false,
                prevArrow: '<i class="icofont-brand-jaguar slick-prev"></i>',
                nextArrow: '<i class="icofont-long-arrow-right slick-next"></i>',
                dots: false,
                fade: true,
                cssEase: 'linear',
            });
        }
    }

    //Active heor slider
                heroSlider();

    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });



    /*------------------------------------------
        = OWL CAROUSEL SLIDER
    -------------------------------------------*/

    /*------------------------------------------
        SERVICES SLIDER
    -------------------------------------------*/
        $('.service-slider').owlCarousel({
            autoplay: true,
            autoplayHoverPause:true,
            loop: true,
            margin: 30,
            dots: false,
            mouseDrag: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            navSpeed: 3000,
            smartSpeed: 3000,
            responsive: {
                0 : {
                    items: 1
                },

                450 : {
                    items: 1
                },

                600 : {
                    items: 1
                },

                1199 : {
                    items: 1
                },

                1200 : {
                    items: 2
                }
            }
        });

    /*------------------------------------------
        TEAM SLIDER
    -------------------------------------------*/
        $('.team-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            dots: false,
            mouseDrag: false,
            smartSpeed: 1000,
            responsive: {
                0 : {
                    items: 2
                },

                450 : {
                    items: 2
                },

                600 : {
                    items: 2
                },

                992 : {
                    items: 2
                }
            }
        });

    /*------------------------------------------
        SERVICES SLIDER
    -------------------------------------------*/
        $('.service-slider2').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            dots: false,
            mouseDrag: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            navSpeed: 1000,
            smartSpeed: 1000,
            responsive: {
                0 : {
                    items: 2
                },

                450 : {
                    items: 1
                },

                600 : {
                    items: 1
                },

                992 : {
                    items: 2
                }
            }
        });


    /*------------------------------------------
        Service SLIDER
    -------------------------------------------*/
        $("#service-slider3").owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            dots: false,
            mouseDrag: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            navSpeed: 1000,
            smartSpeed: 1000,
            responsive:{
              0:{
                items:1
              },
              480:{
                items:1
              },
              600:{
                items:1
              },
              800:{
                items:2
              },
              1024:{
                items:3
              },
              1200:{
                items:3
              }
            }
        });

         //owl-Carousel-TwoColumn
    $("#client_carousel").owlCarousel({
        loop:true,
        autoplay: 2000,
        autoplayHoverPause:true,
        smartSpeed: 700,
        items: 6,
        margin:30,
        dots: false,
        nav:false,
        navText: [
          '<i class="flaticon-back-1"></i>',
          '<i class="flaticon-next"></i>'
        ],
        responsive:{
          0:{
            items:2
          },
          480:{
            items:3
          },
          600:{
            items:3
          },
          800:{
            items:4
          },
          1024:{
            items:6
          },
          1200:{
            items:6
          }
        }
    });

    /*------------------------------------------
        TESTIMONIAL SLIDER
    -------------------------------------------*/
        $('.testimonial-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            dots: false,
            mouseDrag: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            navSpeed: 1000,
            smartSpeed: 1000,
            responsive: {
                0 : {
                    items: 1
                },

                450 : {
                    items: 1
                },

                600 : {
                    items: 1
                },

                992 : {
                    items: 2
                }
            }
        });


    /*------------------------------------------
        GALLERY SLIDER
    -------------------------------------------*/
        $('.gallery-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            dots: false,
            mouseDrag: false,
            smartSpeed: 1000,
            responsive: {
                0 : {
                    items: 1
                },

                450 : {
                    items: 2
                },

                600 : {
                    items: 3
                },

                992 : {
                    items: 4
                }
            }
        });


    /*------------------------------------------
        CLIENT SLIDER
    -------------------------------------------*/
    $('.client-slider').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 30,
            dots: false,
            mouseDrag: false,
            smartSpeed: 1000,
            responsive: {
                0 : {
                    items: 1
                },

                450 : {
                    items: 2
                },

                600 : {
                    items: 3
                },

                992 : {
                    items: 4
                }
            }
        });


     /*------------------------------------------
        = TESTIMONIALS SLIDER
    -------------------------------------------*/
    if($(".testimonials-slider".length)) {
        $(".testimonials-slider").owlCarousel({
            mouseDrag: true,
            smartSpeed: 1500,
            margin: 30,
            loop:true,
            nav: false,
            navText: ['<i class="fi flaticon-slim-left"></i>','<i class="fi flaticon-slim-right"></i>'],
            dots: false,
            items: 1
        });
    }

    /*----------------------
    Counter
    ------------------------*/
    function counterUpFunfact() {

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });        
    }

    /*----------------------
    Nice Select Active
    ------------------------*/
    function niceSelect() {
        $('.frm_select').niceSelect();
    }


    /*----------------------
    Masonary
    ------------------------*/
    $('.gallery-content').imagesLoaded(function() {

        var $grid = $('.gallery-content').isotope({
            itemSelector: '.gallery_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.gallery_item',
            }
        });

        // filter items on button click
        $('.filter-button-group').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });

        $('.project-menu button').on('click', function(event) {
             $(this).siblings('.active').removeClass('active');
             $(this).addClass('active');
             event.preventDefault();
         });
        
    });


    /*------------------------------------------
        = Magnific Popup
    -------------------------------------------*/


    // gallery link setting
    $('.gallery-content').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery:{
        enabled:true
      }
    });

    // video popup  setting
    $('.video-popup').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }

    });

/*------------------------------------------
        = BACK TO TOP BTN SETTING
    -------------------------------------------*/
    $("body").prepend("<a href='#'' class='back-to-top hvr-pulse-grow animated'><i class='fa fa-long-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 300;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function() {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })



    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function() {

        preloader();
        sliderBgSetting();
        robotoSlider();

     });

    /*==========================================================================
        WHEN WINDOW READY
    ==========================================================================*/
    $(document).on('ready', function() {

        slicknav();
        counterUpFunfact();
        niceSelect();

    });


    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function() {

        toggleBackToTopBtn();
        bgParallax();

    });

    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function() {

    });

})(window.jQuery);
