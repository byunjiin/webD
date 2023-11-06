var imgs = 2;
var now = 0;

start(); //함수실행

function start(){
  $(".imgs>img").eq(0).siblings().fadeOut(1000); //fadeOut함수 : 서서히 사라지기
  setInterval(function(){fadeInOut();},3000) //3초에 1번씩 fadeInOut함수 실행
}
function fadeInOut(){
  now=now==imgs? 0 : now+=1
  $(".imgs>img").eq(now-1).fadeOut(1000);
  $(".imgs>img").eq(now).fadeIn(1000); //fadeIn함수 : 서서히 나타나기
}