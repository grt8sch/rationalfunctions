$(function(){
  $("#content").css("margin-left",$("nav").width());
  $("#content>:not(header)").animateOnScroll({offset:100});
  $("nav a").each(function(){
    $(this).click(function(){
      let target = $(this).data("target");
      $('html,body').animate({scrollTop: $(target).offset().top},500,function(){
        window.location.hash=target;
      });
    });
  });
});/*
$(window).on("load",function(){
  if(location.hash.length > 1){$('html,body').animate({scrollTop:$(location.hash).offset().top}, 500);}
});
*/
