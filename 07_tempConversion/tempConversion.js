const convertToCelsius = function(tempInF) {
  let convertedTemp = ((tempInF - 32) * 5) / 9;
  let roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function(tempInC) {
  let convertedTemp = ((tempInC * 9) / 5) + 32;
  let roundedTemp = Math.round(convertedTemp * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
