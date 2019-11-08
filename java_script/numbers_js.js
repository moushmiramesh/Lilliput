$(document).ready(function(){
	audio_support = !!(document.createElement('audio').canPlayType);   //check if browser supports audio tag of HTML5
	playing = false;
	timer=0;
	autoplay_time=10000;	
	animate_time = 6000;
	number_of_slides = $("#alpha div").length;

	last_slide = number_of_slides - 1;
	screen_width=$(".container").css("width");
	screen_width = parseInt(screen_width.replace("px",""));

	for(i=0; i<number_of_slides; i++){
	   $("#alpha img:eq("+i+")").bind("click",select);
	}
	
	$(window).load(function(){
          audio_play(); //first time playing
	  playing = true;
	  animate();	  
	  timer=setTimeout("play()",autoplay_time);
	});   				           		
});  

function select(){
          
	  if(playing){
		  clearTimeout(timer);
		  playing = false;
	  }
	  var click_slide = $(this).index("#alpha img");   
	  var active_slide = $(".active").index("#alpha div");
          var img_src = $(this).attr('src');		  
	  $("#alpha div:eq("+ active_slide +")").removeClass("active"); 
	  $("#alpha div:eq("+ click_slide +")").addClass("active");
	  display_pic(img_src);
	  animate();
	  audio_play();
	  playing = true;
	  timer=setTimeout("play()",autoplay_time);						
}

function display_pic(s){
   $('#display_pic').attr('src',s);
}


function show_next(){
	  var active_slide = $(".active").index("#alpha div");
	  if (active_slide == last_slide){
		  $("#alpha div:eq(0)").addClass("active");   //display the last slide if present slide is 0th element.
	  }
	  else{		  
	      $(".active").next().addClass("active");
	  }
	  $("#alpha div:eq("+ active_slide +")").removeClass("active");
          var img_src = $(".active img").attr('src');
          display_pic(img_src);
          animate();
	  audio_play();	
}

					
function play()
{  
   show_next();
   timer=setTimeout("play()",autoplay_time);
}

function animate()
{
	if(screen_width > 479){
             $(".display img").animate({marginLeft: "40%"}, animate_time).animate({marginLeft: "0"}, 1);
	}
}


function audio_play()
{   
    if(audio_support){
   
                $("#alpha div.active").find("audio").trigger("play");
      	$("#speaker").fadeOut().fadeIn();
     }
}