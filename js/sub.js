$(document).ready(function () {




    /* sub observatory js */
    /* floormap 층 클릭 시 해당 층수 페이드인*/
    $(".floormap_f li").click(function () {
        let idx = $(this).index();
        $(".floormap_mid li").eq(idx).addClass("on").siblings().removeClass("on");
    })

    /* sub facilitice js */
    /* experience 체험시설 슬라이드 */
    var bullet = ['인트로', '캐플러 62 공전모형', 'GMT', '스페이스 시어터', '타이탄 세트장'];
    const ex_slide = new Swiper('.ex_slide', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 1250,
    });

    /* reflect 천체투영 슬라이드 */
    const reflect_slide = new Swiper('.reflect_slide', {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 1250,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true",
        },
    });

    /* observe 천체관측 슬라이드 */
    const observe_slide = new Swiper('.observe_slide', {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        speed: 1250,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true",
        },
    });

    /* sub program */
    /* program_night 야간 프로그램 슬라이드*/
    const night_slide = new Swiper('.night_slide', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(".sell_tab_btn > li").click(function () {
        let idx = $(this).index();
        $(".sell_tab_btn > li").eq(idx).addClass("on").siblings().removeClass("on");
        $(".sell_tab_table > li").eq(idx).addClass("on").siblings().removeClass("on");
    });

    /* sub infor */
    /* info_reserve 이용 및 예약안내 슬라이드 */
    const reserve_slide = new Swiper('.reserve_slide', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true",
        },
    });

    /* sub notice */
    /* observe slide */
    const observe_txt = new Swiper('.observe_txt', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination1",
            type: "fraction",
            clickable: "true",
        },
    });
    /* slide link */
    const observe_img = new Swiper('.observe_img', {
        loop: true,
    });
    observe_txt.controller.control = observe_img;
    observe_img.controller.control = observe_txt;

    /* navi controll */
    $(".navi_btn > i:last-child").hide();
    $(".pause").click(function () {
        observe_txt.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    })

    $(".play").click(function () {
        observe_txt.autoplay.start();
        $(".play").hide();
        $(".pause").show();
    });

    /* sub help */
    /* help_question li 클릭 시 슬라이드 */
    $(".question_a").hide();
    $(".question_list > li").click(function () {
        $(".question_a").stop().slideUp();
        $(this).find(".question_a").stop().slideToggle();
    });



});