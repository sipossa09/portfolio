$(function(){
////////////////start////////////////



$("#myWeb").fullpage({
    anchors:['m01', 'm02', 'm03', 'm04', 'm05', 'm06', 'm07', 'm08','m09'],
	//navigation: true,
    afterLoad: function(origin, destination, direction){
        //console.log(destination.index);
        var idx=destination.index;
        $(".section").eq(idx).addClass("on").siblings().removeClass("on");
        $("nav li").eq(idx).addClass("on").siblings().removeClass("on");
    },
});

$("#intro").YTPlayer({
    videoURL:'iJ6WIfeS3_c',
    containment:'.m01',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    useOnMobile: true,
});

//포플동영상제어
$("#portfolio01").YTPlayer({
    containment:'.portfolio01',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay:false,
});


$(".m02 .xi-play").on("click", function(){
    $("#portfolio01").YTPPlay();
});

$(".m02 .xi-pause").on("click", function(){
    $("#portfolio01").YTPPause();
});

$(".m02 .xi-volume-up").on("click", function(){
    $("#portfolio01").YTPUnmute();
});

$(".m02 .xi-volume-mute").on("click", function(){
    $("#portfolio01").YTPMute();
});

//포플동영상제어
$("#portfolio02").YTPlayer({
    containment:'.portfolio02',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay:false,
});


$(".m03 .xi-play").on("click", function(){
    $("#portfolio02").YTPPlay();
});

$(".m03 .xi-pause").on("click", function(){
    $("#portfolio02").YTPPause();
});

$(".m03 .xi-volume-up").on("click", function(){
    $("#portfolio02").YTPUnmute();
});

$(".m03 .xi-volume-mute").on("click", function(){
    $("#portfolio02").YTPMute();
});

//포플동영상제어
$("#portfolio03").YTPlayer({
    containment:'.portfolio03',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay:false,
});


$(".m04 .xi-play").on("click", function(){
    $("#portfolio03").YTPPlay();
    $("#portfolio03").YTPUnmute()
});

$(".m04 .xi-pause").on("click", function(){
    $("#portfolio03").YTPPause();
  	
});

$(".m04 .xi-volume-up").on("click", function(){
    $("#portfolio03").YTPUnmute();
});

$(".m04 .xi-volume-mute").on("click", function(){
    $("#portfolio03").YTPMute();
});

//포플동영상제어
//$("#portfolio04").YTPlaylist(videos, false);
$("#portfolio04").YTPlayer({
    containment:'.portfolio04',
    autoPlay:true, 
    mute:true, 
    showControls: false,
    playOnlyIfVisible: true,
    optimizeDisplay:false,
    showYTLogo:false,
});

$("#portfolio04").on("YTPTime", function(e){
    var totalTime=$(this).YTPGetTotalTime();
    var currentTime=$(this).YTPGetTime();
    console.log(totalTime,currentTime);
    $(".time").html( currentTime + " / " + totalTime)
})





$(".m05 .xi-play").on("click", function(){
    $("#portfolio04").YTPPlay();
});

$(".m05 .xi-pause").on("click", function(){
    $("#portfolio04").YTPPause();
});

$(".m05 .xi-volume-up").on("click", function(){
    $("#portfolio04").YTPUnmute();
});

$(".m05 .xi-volume-mute").on("click", function(){
    $("#portfolio04").YTPMute();
});

//photo_slider 슬라이드
$(".photo_slider").slick({
    arrows:false,
    dots:true,
    slidesToShow: 3,
    autoplay:4000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});

$(".m07 i.xi-arrow-left").on("click", function(){
    $(".photo_slider").slick("slickPrev");
});

$(".m07 i.xi-arrow-right").on("click", function(){
    $(".photo_slider").slick("slickNext");
});

//full창 open
$("#header i, .m09 img").on("click", function(){
    $("#full").addClass("on")
});

$("#full i,#full a").on("click", function(){
    $("#full").removeClass("on")
});


//풀페이지에서 스크롤 안되는 문제 해결
$("#header .xi-bars").click(function(){
    $.fn.fullpage.setAllowScrolling(false);
});
$("#full .xi-close, #full a").click(function(){
    $.fn.fullpage.setAllowScrolling(true);
});

// $(".overTxt").on("mousewheel scroll", function(e){
//     e.stopPropagation();
// })
   
////////////////end///////////////
});