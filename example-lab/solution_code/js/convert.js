input = document.querySelector("#farenheit");
document.addEventListener('keyup', function(){
  f = parseInt(input.value);
  c = (f - 32)*(5/9);
  document.querySelector('#celcius').innerHTML = Math.round(c) + "°C";
});