//close side menu when anchor is clicked
if (window.innerWidth < 1200) {
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .on("click", function () {
      $.sidr('close', 'sidr');
    });
}

//-------------------------//
// will be added as a 
// product in the future
// so this will become 
// redundant
//-------------------------//