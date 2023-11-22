jQuery(document).ready(function () {
  // 메뉴슬라이드기능
  $(".navi>li").mouseover(function () {
      //메뉴제목부분에 마우스를 올릴 시
      $(".submenu").stop().slideDown(500);
    }).mouseout(function () {
      //메뉴제목부분에 마우스 내릴 시
      $(".submenu").stop().slideUp(500);
    });
  //이미지 슬라이드 기능(애니메이션)
  setInterval(function(){
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -1200}); // 지금 예시는좌-우지만 위-아래로 바꿀땐, marginTop
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : -2400});
    $('.slidelist').delay(2000);
    $('.slidelist').animate({marginLeft : 0});
    $('.slidelist').delay(2000);
  });
  //탭 메뉴 공지사항, 갤러리 전환하기
  $(function(){
    $('.tabmenu>li>a').click(function(){
      $(this).parent().addClass('active') // 현재 요소의 부모를 찾아 active클래스 추가할때
        .siblings() // 다른 형제요소를 찾고
        .removeClass('active'); // active를 삭제한다
      return false; //클릭 이벤트
    });
  });
  //레이어 팝업창
  $(".notice li:first").click(function(){ // 첫번째 요소 클릭시
    $('#layer').addClass('active'); //active클래스 추가
  });
  $(".btn").click(function(){ // 버튼 클릭시
    $('#layer').removeClass('active'); //active 삭제
  });
});