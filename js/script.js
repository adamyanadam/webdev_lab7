function init(){
  var button = document.getElementById('entrybutton');
  var input = document.getElementById('entryinput');
  var output = document.getElementById('textoutput');

  button.addEventListener('click', function() {
    alert('Adam Yan: ' + input.value);
    output.innerHTML = input.value;
  });
}

window.addEventListener('load', init);
