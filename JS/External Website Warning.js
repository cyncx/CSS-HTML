
(function () {
  var links =
    document.querySelectorAll('.link__external'),
    warning = document.createElement('div'),
    warningText = "Alexander Southwell Mortgage Services Ltd has no control or responsibility for the pages you are about to access, or to where any subsequent links may take you",
    popup,
    url;
  links.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      url = this.getAttribute('href');
      popup = `
<div class="warning-wrapper__inner">
<p>${warningText}</p>
<a href="${url}" target="_blank" onclick="hideModal(this)">Continue to website</a>
<a href="javascript:;" onclick="hideModal(this)">Close</a>
</div>`;
      warning.classList.add('warning-wrapper');
      warning.innerHTML = popup;
      document.body.prepend(warning);
    })
  });

})();
const hideModal = function (e) {
  var modal = e.parentElement.parentElement
  modal.style.opacity = 0;
  setTimeout(function () {
    modal.remove();
  }, 500)
}