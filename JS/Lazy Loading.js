document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;
  // if ("IntersectionObserver" in window) {
  //   console.log('intersection observer here');
  //   lazyloadImages = document.querySelectorAll(".lazy");
  //   var delay;
  //   var imageObserver = new IntersectionObserver(function (entries, observer) {
  //     for (var i = 0; i < entries.length; i++) {
  //       var entry = entries[i];
  //       if (entry.isIntersecting) {
  //         var image = entry.target;
  //         image.src = image.dataset.src;
  //         if (image.src = image.dataset.src) {
  //           image.removeAttribute('data-src');
  //         }
  //         image.classList.remove("lazy");
  //         imageObserver.unobserve(image);
  //       }
  //     }
  //   });
  //   for (var i = 0; i < lazyloadImages.length; i++) {
  //     var _image = lazyloadImages[i];
  //     imageObserver.observe(_image);
  //   }
  // } else {
  console.log('no intersection observer');
  var lazyThrottle, scrollTop, image;
  lazyloadImages = document.querySelectorAll(".lazy");
  lazyloadImages = Array.from(lazyloadImages);
  var lazyload = function lazyload() {
    if (lazyThrottle) {
      clearTimeout(lazyThrottle);
    }
    lazyThrottle = setTimeout(function () {
      scrollTop = window.pageYOffset;
      for (var i = 0, n = lazyloadImages.length; i < n; i++) {
        image = lazyloadImages[i];
        console.log(lazyloadImages[i]);
        if (image.offsetTop < (window.innerHeight + scrollTop)) {
          image.src = image.dataset.src;
          if (image.src = image.dataset.src) {
            image.removeAttribute('data-src');
          }
          image.classList.remove("lazy");
          lazyloadImages.splice(i, 1);
        }
      }
      if (lazyloadImages.length === 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  };
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
// });