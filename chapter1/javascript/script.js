//사이드바 메뉴 마우스오버,아웃
$(document).ready(function(){
  $('.navi>li').mouseover(function(){ //마우스를 올리면 슬라이드다운 5초
    $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function(){ //마우스를 내리면 슬라이드업 5초
    $(this).find('.submenu').stop().slideUp(500);
  });
});

//이미지슬라이드 페이드인,아웃
$('.imgslide a:gt(0)').hide(); //gt(index)는 index이상의 값들을 모두 선택 여기에선 0이상이니 1,2,3 모두 선택
setInterval(function(){
  $('.imgslide a:first-child') //첫번째 요소
    .fadeOut(1000) //1초에 걸쳐 페이드아웃
    .next('a') //다음요소 선택
    .fadeIn(1000) //1초에 걸쳐 페이드 인
    .end() //이전 요소 선택
    .appendTo('.imgslide'); //선택한 요소를 마지막 자식 요소로 추가(1,2,3,1,2,3 무한 반복)
},3000); //3마다 반복

//모달창
$('.notice li:first').click(function(){ //공지사항 첫번째 요소 클릭시 함수실행
  
  $('#modal').addClass("active"); //active라는 클래스 추가
});
$('.btn').click(function(){ //버튼 클릭시 함수실행
  $('#modal').removeClass('active'); //active라는 클래스 삭제
});
