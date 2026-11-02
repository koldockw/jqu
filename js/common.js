$(document).ready(function(){
  $(window).on('scroll',function(){let max=$(document).height()-$(window).height();$('#progress').css('width',(max>0?$(window).scrollTop()/max*100:0)+'%');});
  $('.copy-link').on('click',function(){navigator.clipboard.writeText(window.location.href).then(function(){showToast('Link copied!');}).catch(function(){showToast('Copy is unavailable');});});
});
function showToast(message){$('#toast').stop(true,true).text(message).fadeIn(200).delay(1800).fadeOut(400);}
