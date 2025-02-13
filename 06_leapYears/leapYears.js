const leapYears = function(year) {

while (year > 0) {
  if (year % 4 === 0) {
    year % 100;
    if (year % 100 !== 0) {
      return true;
    } else if (year % 100 === 0) {
      year % 400;
      if (year % 400 !== 0) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
}
return;
};

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));
// Do not edit below this line
module.exports = leapYears;



