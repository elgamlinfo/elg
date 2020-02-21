$(document).ready(function () {

    ///////////////////// Loading Page ////////////////

    $(window).on('load', function(){
        $('.loadingPage').fadeOut(3000);
    });

    /////// start reset width and height////////

    var wHeight = $(window).height();

    if ($(window).width() >= 1200) {

        $(".bage-body").css("marginLeft", $(".navbar").innerWidth());

    }

    $(".block").height(wHeight);

    $(window).on("resize", function () {

        var wHeight = $(window).height();

        $(".block").height(wHeight);

        if ($(window).width() >= 1200) {

            $(".bage-body").css("marginLeft", $(".navbar").innerWidth());

        } else {

            $(".bage-body").css("marginLeft", '0');

        }

    });

    ///////end reset width and height////////


    /////////////////////////////// start links sync ///////////////////////////////

    var navLinks = $('.navbar .nav-links ul li a');

    navLinks.on("click", function (e) {
        e.preventDefault();

        $('html,body').animate({

            scrollTop: $($(this).data('scroll')).offset().top,

        }, 2000);

    });


    $('.scroll-arrow  a').on("click", function (e) {
        e.preventDefault();

        $('html,body').animate({

            scrollTop: $(".about").offset().top,

        }, 2000);

    });

    $(window).on('scroll', function () {

        if ($(window).scrollTop() >= $($('.navbar .nav-links ul li a').data('scroll')).offset().top) {
            $('.navbar .nav-links ul li > span').removeClass("active");
            $(".scroll-Sync").each(function () {
                var id = $(this).attr('id');
                $('.navbar .nav-links ul li a[ data-scroll = "' +'#'+ id + '"]').addClass("active");
            })
        }
    });


    /////////////////////////////// end links sync ///////////////////////////////

    $('.porto-list ul li').on('click', function () {

        $(this).addClass("active").siblings().removeClass("active");

        if ($(this).data('class') === ".all") {

            $('.shuffle-img img').css('opacity', '1');

        } else {
            $('.shuffle-img img').css('opacity', '0.1');
            $($(this).data('class')).css('opacity', '1');
        }
    });

    ///////bollets////////////
    $(".bollets ul li").on('click', function () {
        $(this).css("border", "2px solid #fd4d4d").siblings().css("border", "2px solid #9c9c9c");
        $($(this).data("class")).fadeIn().siblings().fadeOut();
    });

    //////*Toggle menu navBar Button

    $(".menu-btn").on("click", function () {
        $('.navbar').slideToggle();
    });

    //////*Toggle menu navBar Button

})

