$(".TextBox1").each(function() {
  var input = $(this);
  var placeholder = $(this).attr("value");
  input.attr("placeholder", placeholder);
  input.attr("value", "");
});