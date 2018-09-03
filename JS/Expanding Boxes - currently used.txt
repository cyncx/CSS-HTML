//HTML

<div class="expand-box">
     <h1>
	{{title}}
     </h1>

     <div class="expand-text">
	{{content}}
     </div>

     <div class="rmbtn">
	{{button text}}
     </div>
     <div class="rlbtn">
	{{button text}}
     </div>
</div>

//CSS
.expand-box {
    display: block;
    height: auto;
    overflow: hidden;
}


//Javascript - add to end body section

<script type="text/javascript">
function main(){
	//gets expanding content and hides it
	$expand = $(".expand-text");
	$expand.hide();
	//hides read less button
	$(".rlbtn").hide();
  	$button = $(".rmbtn")
	//sets value for read more button from html
	$initial = $button.html();
	//sets value for read less button from html
	
	
	//runs on click of read more button
	$(".rmbtn").on('click', function(){
		//sets rmbtn as button
		$button = $(this);
		$content = $button.siblings('.expand-text');
	  	$minimize = $button.siblings('.rlbtn').html();
	  	
		//toggles content
		$content.slideToggle(400, function(){
			$button.html(function(){
			return $content.is(":visible") ? $minimize : $initial
    })
			
  });
});
}
$(document).ready(main);
</script>