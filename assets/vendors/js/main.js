$(document)
    .ready(function () {

        $('.nav-item #model')
            .click(function () {
                $('.navbar-collapse').removeClass('show');
            });

        $(window).scroll(function () {
            $scrollamount = $(window).scrollTop();

            if ($scrollamount > 100) {
                $(".sticky-menu").addClass("fixed");
                $('.search').addClass("search-none");
                $('.big-nav-logo').css({'display': 'block'});
                // $('.navbar-brand').addClass('d-lg-block');
            } else {
                $(".sticky-menu").removeClass("fixed");
                $('.search').removeClass("search-none");
                $('.big-nav-logo').css({'display': 'none'});
                // $('.navbar-brand').removeClass('d-lg-block');
            }
        });

        $('.video-items-active').slick({slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.testmonial-nav'});
        $('.testmonial-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.video-items-active',
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"><' +
                    '/i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right">' +
                    '</i></button>',
            centerMode: true,
            focusOnSelect: true,
            scroll: true,
            centerPadding: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        infinite: true,
                        dots: false,
                        scroll: true
                    }
                }, {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });

        /* 5.photo Gallery Start*/

        $("[id^=carousel-thumbs]").carousel({interval: false});

        /** Pause/Play Button **/
        $(".carousel-pause").click(function () {
            var id = $(this).attr("href");
            if ($(this).hasClass("pause")) {
                $(this)
                    .removeClass("pause")
                    .toggleClass("play");
                $(this)
                    .children(".sr-only")
                    .text("Play");
                $(id).carousel("pause");
            } else {
                $(this)
                    .removeClass("play")
                    .toggleClass("pause");
                $(this)
                    .children(".sr-only")
                    .text("Pause");
                $(id).carousel("cycle");
            }
            $(id).carousel;
        });

        /** Fullscreen Buttun **/
        $(".carousel-fullscreen").click(function () {
            var id = $(this).attr("href");
            $(id)
                .find(".active")
                .ekkoLightbox({type: "image"});
        });

        if ($("[id^=carousel-thumbs] .carousel-item").length < 2) {
            $("#carousel-thumbs [class^=carousel-control-]").remove();
            $("#carousel-thumbs").css("padding", "0 5px");
        }

        $("#carousel")
            .on("slide.bs.carousel", function (e) {
                var id = parseInt($(e.relatedTarget).attr("data-slide-number"));
                var thumbNum = parseInt($("[id=carousel-selector-" + id + "]").parent().parent().attr("data-slide-number"));
                $("[id^=carousel-selector-]").removeClass("selected");
                $("[id=carousel-selector-" + id + "]").addClass("selected");
                $("#carousel-thumbs").carousel(thumbNum);
            });

        /* Photo Gallery End */

        /**
   * Clients Slider
   */
        new Swiper('.clients-slider', {
            speed: 400,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 60
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 80
                },
                992: {
                    slidesPerView: 6,
                    spaceBetween: 120
                }
            }
        });
        // pop up

        function showModel() {
            $('#popup').show();
        }
        setTimeout(showModel, 20000);

        $('.button').click(function(){
            $('#popup').hide();
        })

        function showModel1() {
            $('#addpop').show();
        }
        setTimeout(showModel1, 10000);

        $('.cross').click(function(){
            $('#addpop').hide();
        })

    });

// top header cloce ,date js

function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12) {
        pe = "PM";
    }
    if (hou == 0) {
        hou = 12;
    }
    if (hou > 12) {
        hou = hou - 12;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n) 
        ;
        return n;
    }

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Augest",
        "September",
        "October",
        "November",
        "December"
    ];
    var week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    var ids = [
        "dayname",
        "month",
        "daynum",
        "year",
        "hour",
        "minutes",
        "seconds",
        "period"
    ];
    var values = [
        week[dname], months[mo], dnum.pad(2),
        yr,
        hou.pad(2),
        min.pad(2),
        sec.pad(2),
        pe
    ];
    for (var i = 0; i < ids.length; i++) 
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}
