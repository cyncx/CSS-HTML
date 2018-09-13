
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
window.addEventListener('load', function() {
	$(initCollapse);
});
