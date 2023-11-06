// 메뉴슬라이드기능
jQuery(document).ready(function () {
  $(".navi>li")
    .mouseover(function () {
      //메뉴제목부분에 마우스를 올릴 시
      $(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      //메뉴제목부분에 마우스 내릴 시
      $(".submenu").stop().slideUp(500);
    });
});
