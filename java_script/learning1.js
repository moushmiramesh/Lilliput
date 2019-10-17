$(document).ready(function(){
          
	audio_support = !!(document.createElement('audio').canPlayType);   //check if browser supports audio tag of HTML5
	playing = false;
	timer=0;
	autoplay_time=20000;	
	number_of_slides = 26;
	last_slide = number_of_slides - 1;
	for(i=0; i<number_of_slides; i++)
	{
	   $("#alpha a:eq("+i+")").bind("click",select);
	}


      

});  

function select(){
          playing = true;
	  if(playing){
                clearTimeout(timer);
		playing = false;
	  }
  
	  var click_slide = $(this).index("#alpha a");	
          var active_slide = $(".active").index("#alpha div");
          
          $("#alpha div:eq("+ active_slide +")").removeClass("active");
          $("#alpha div:eq("+ click_slide +")").addClass("active");
	      
	  audio_play();
	  playing = true;
	  timer=setTimeout("play()",autoplay_time);						
}	


function show_next(){

	  audio_play();	
          playing = true;
	  timer=setTimeout("play()",autoplay_time);
}
					
function play()
{  
   
   show_next();
   timer=setTimeout("play()",autoplay_time);
}


function audio_play()
{
    if(audio_support){
	$("#alpha div.active").find("audio").trigger("play");
      	$("#speaker").fadeOut().fadeIn();
     }
}