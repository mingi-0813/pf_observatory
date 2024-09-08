$(document).ready(function () {

    $(".depth2_bg,.depth2").hide();
    $(".gnb > li").mouseenter(function () {
        $("h1 img").attr("src", "../img/common/logo_db.svg");
        $(".depth2_bg,.depth2").stop().slideDown();
        $("#header").addClass("on")
    });

    $(".gnb > li").mouseleave(function () {
        $("h1 img").attr("src", "../img/common/logo_w.svg");
        $(".depth2_bg,.depth2").stop().slideUp();
        $("#header").removeClass("on")
    });

    $(".gnb > li").mouseenter(function () {
        $(".util li i").addClass("on");
    });
    $(".gnb > li").mouseleave(function () {
        $(".util li i").removeClass("on");
    });

    $(".search,.search_close").hide();
    $(".search_open").click(function () {
        $(".search,.search_close").stop().fadeIn();
        $(".search_open").stop().hide();
    });
    $(".search_close,.section").click(function () {
        $(".search_open").stop().fadeIn();
        $(".search").stop().fadeOut();
        $(".search_close").stop().hide();
    });



    $(".sitemap").hide();
    $(".sitemap_open").click(function () {
        $(".sitemap").fadeIn();
    });
    $(".sitemap_close").click(function () {
        $(".sitemap").fadeOut();
    });
    $(".sitemap").click(function () {
        $(".sitemap").fadeOut();
    });

    $(".m_menu_open").click(function () {
        $(".m_menu").animate({
            "right": "220",
        });
    });
    $(".m_menu_close").click(function () {
        $(".m_menu").animate({
            "right": "0",
        });
    });
    $(".mdepth2 > li > a").click(function () {
        $(".m_menu").animate({
            "right": "0",
        });
    });


    $(".mgnb > li > a").click(function (e) {
        e.preventDefault();
    });

    $(".mdepth2").hide();
    $(".mgnb > li").click(function () {
        $(".mdepth2").stop().slideUp();
        $(this).find(".mdepth2").stop().slideToggle();
    });



});