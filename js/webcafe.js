// 서브메뉴 제어를 위한 스크립트 
$(function() {
    //if 구문처럼
    $(".main-menu>li").hover(
        //True
        function() {
            $(this).children("ul").css("display", "block");
        },
        //False
        function() {
            $(this).children("ul").css("display", "none")
        });
    $(".main-menu>li>span").focusin(
        //True
        function() {
            $(this).siblings("ul").css("display", "block");
        });
    $(".main-menu>li>ul>li:last-child a").focusout(
        //True
        function() {
            $(this).parent().parent().css("display", "none");
        });
});