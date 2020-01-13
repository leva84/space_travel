$(function(){
  $('.slogan-position').hide();
  $('.position').click(function(){
    $(this).next().slideToggle({duration: 500})
  });
});