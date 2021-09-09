// implement two functions to change from Celsius to Fahrenheit and vice versa.
function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}

function fToC(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  return fToCel;
}