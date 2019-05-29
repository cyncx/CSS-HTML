// VANILLA
var input = document.querySelectorAll('.TextBox1'),
  placeholder, elem;
for (var i = 0; i < input.length; i++) {
  elem = input[i];
  if (elem.type == 'textarea') {
    placeholder = elem.innerHTML;
    elem.innerHTML = "";
  } else {
    placeholder = elem.getAttribute('value');
    elem.setAttribute('value', '');
  }
  elem.setAttribute('placeholder', placeholder);
}