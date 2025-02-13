const sumAll = function(rangeStart, rangeEnd) {
  let total = 0;

  if(rangeStart > rangeEnd){ 
    tempStart = rangeStart;
    rangeStart = rangeEnd;
    rangeEnd = tempStart;
  } else if (rangeStart < 0 || rangeEnd < 0 ) {
    return("ERROR");
  } else if (isNaN(rangeStart)|| isNaN(rangeEnd)) {
    return("ERROR");
  } else if (typeof rangeStart !== "number" || typeof rangeEnd !== "number") {
    return ("ERROR");
  } else if (rangeStart % 1 !== 0 || rangeEnd % 1 !== 0) {
    return("ERROR");
  }

  for(let i = rangeStart; i <= rangeEnd; i++) {
    total += i;
  }
  return total;
};

console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 7));
console.log(sumAll(-10, 4));
console.log(sumAll(10, [90, 1]));
console.log(sumAll(10, "90"));
// Do not edit below this line
module.exports = sumAll;
