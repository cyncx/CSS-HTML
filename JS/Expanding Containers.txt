//-----HTML-----//

<div class="expand-container">
  <h3>An expanding box</h3>
  <p>Click on the button to show the hidden text</p>
  <div class="expand-content">
    <p>Dolore tenderloin leberkas quis. Ground round ipsum est salami nisi. Tongue pancetta eiusmod adipisicing proident ham hock culpa turducken. Frankfurter ham hock labore cupim, qui aute pariatur magna. Fatback eu turducken ham hock, adipisicing flank jowl. Meatloaf in proident sed leberkas, turkey sint irure pastrami nulla aute qui capicola ipsum. Ea pork loin quis et.</p>
  </div>
  <a class="expand-btn" data-ease="swing" data-speed="600">
    Read More
  </a>
  <div class="minimize">
    Read Less
  </div>
</div>


//-----CSS-----//

.expand-content p {
  margin-top: 0;
}


//-----JS-----//

//hides helper button & expanding text
$('.minimize').hide();
$('.expand-content').hide();

//init collapse container
const initCollapse = () => {
	$('.expand-container').each((i, elem) => {
		let collapseBox = {	};
		let container = $(elem);
		let button = container.find('.expand-btn');
		let settings = container.find('#settings');	
		collapseBox.easing = getEasing(button);
		collapseBox.speed = getSpeed(button);	
		container.collapse = collapseBox;
		initButton(button, container);		
	});	
}

//init read more button		
const initButton = (button, container) => {
	container.collapse.readMore = button.html();
  container.collapse.readLess = button.siblings('.minimize').html();
	button.on("click", () => switchButton(button, container));
}

//expand container function
const expandContainer = (content, easing, speed) => content.slideToggle(speed, easing);

//change button content
const switchButton = (button, container) => {
	let content = container.find('.expand-content');
	let easing = container.collapse.easing;
	let speed = container.collapse.speed;
	content.css('display') == 'none' ? (button.html(container.collapse.readLess), expandContainer(content, easing, speed))	: (button.html(container.collapse.readMore), expandContainer(content, easing, speed), returnTop(container, speed));
}
const returnTop = (container, speed) => {
	let top = container.offset().top
	if($(window).scrollTop() > top) {
		$('html, body').animate({scrollTop: top}, speed);
	} 
}
//get speed and easing values
const getEasing = (elem) => elem.data("ease");
const getSpeed = (elem) => elem.data("speed");
$(initCollapse);


ES5 COMPATIBLE

'use strict';

//hides helper button & expanding text
$('.minimize').hide();
$('.expand-content').hide();

//init collapse container
var initCollapse = function initCollapse() {
	$('.expand-container').each(function (i, elem) {
		var collapseBox = {};
		var container = $(elem);
		var button = container.find('.expand-btn');
		var settings = container.find('#settings');
		collapseBox.easing = getEasing(button);
		collapseBox.speed = getSpeed(button);
		container.collapse = collapseBox;
		initButton(button, container);
	});
};

//init read more button		
var initButton = function initButton(button, container) {
	container.collapse.readMore = button.html();
	container.collapse.readLess = button.siblings('.minimize').html();
	button.on("click", function () {
		return switchButton(button, container);
	});
};

//expand container function
var expandContainer = function expandContainer(content, easing, speed) {
	return content.slideToggle(speed, easing);
};

//change button content
var switchButton = function switchButton(button, container) {
	var content = container.find('.expand-content');
	var easing = container.collapse.easing;
	var speed = container.collapse.speed;
	content.css('display') == 'none' ? (button.html(container.collapse.readLess), expandContainer(content, easing, speed)) : (button.html(container.collapse.readMore), expandContainer(content, easing, speed), returnTop(container, speed));
};
var returnTop = function returnTop(container, speed) {
	var top = container.offset().top;
	if ($(window).scrollTop() > top) {
		$('html, body').animate({ scrollTop: top }, speed);
	}
};
//get speed and easing values
var getEasing = function getEasing(elem) {
	return elem.data("ease");
};
var getSpeed = function getSpeed(elem) {
	return elem.data("speed");
};
$(initCollapse);