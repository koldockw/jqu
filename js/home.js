$(document).ready(function(){let value=0;let timer=setInterval(function(){value+=5;$('#counter').text(value+'+');if(value>=100)clearInterval(timer);},25);$('#welcome').hide().fadeIn(900);});
