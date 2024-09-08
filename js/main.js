$(document).ready(function () {



    /* program_night slide */
    const night = new Swiper('.night', {
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

    const time = new Swiper('.time', {
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true",
        },
    });

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
    const observe_img = new Swiper('.observe_img', {
        loop: true,
    });
    observe_txt.controller.control = observe_img;
    observe_img.controller.control = observe_txt;

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


});