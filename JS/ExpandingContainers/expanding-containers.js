
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


window.addEventListener('load', function() {
	$(initCollapse);
});
