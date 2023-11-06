var imgs = 2;
var now = 0;

start(); //함수실행

function start(){
  $(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"}); //siblings는 형제요소를 찾음(=순서대로 이미지를 찾아줌)
  //"margin-left":"-2000px"하면 화면밖으로 나감
  setInterval(function(){slide();},2000) //2초에 1번씩 slide함수 실행
}
function slide(){
  now=now==imgs? 0 : now+=1 //now값과 imgs값이 같으면 0, 다르면 n에+1
  $(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
    //"margin-left":"-2000px"하면 화면밖으로 나감
  $(".imgs>img").eq(now).css({"margin-left":"0px"});
    //"margin-left":"0px"하면 화면으로 돌아옴
}