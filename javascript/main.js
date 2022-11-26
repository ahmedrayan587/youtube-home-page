$(document).ready(function () {
    $(".tog1").click(function () {
        $(".moreContent1").toggle();
        $(".show1").toggle();
        $(".hide1").toggle();
    });
    $(".tog2").click(function () {
        $(".moreContent2").toggle();
        $(".show2").toggle();
        $(".hide2").toggle();
    });
    $(".tog3").click(function () {
        $(".moreContent3").toggle();
        $(".show3").toggle();
        $(".hide3").toggle();
    });
    $(".tog4").click(function () {
        $(".moreContent4").toggle();
        $(".show4").toggle();
        $(".hide4").toggle();
    });
    $(".tog5").click(function () {
        $(".moreContent5").toggle();
        $(".show5").toggle();
        $(".hide5").toggle();
    });
    
     
    $("#list").click(function () {
        $("#sideBar").toggle();
        $("#main").toggleClass("col-lg-10 col-md-8 col-sm-8");
        $("#main").toggleClass("col-12");
    })

    $(".video").mouseover(function () {
        $(this).children(".videos")[0].play();
        $(this).children(".videos").attr("controls","");
    });
    $(".video").mouseout(function () {
        $(this).children(".videos")[0].pause();
        $(this).children(".videos").removeAttr("controls");
    });
    
    $(".video").click(function () {
        this.style.display = "contents";
    });
    
});