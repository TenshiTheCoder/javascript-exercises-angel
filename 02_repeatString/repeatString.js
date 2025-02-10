const repeatString = function(string, num) {
  let firstString = "";
  for(let i = 0; i < num; i++){
    firstString += string;
  }

  if(num < 0) {
    return "ERROR";
  }

  return firstString;
};

console.log(repeatString("hey", 3))
console.log(repeatString("hello", 10))
console.log(repeatString("hi", 1))
console.log(repeatString("bye", 0))
console.log(repeatString("goodbye", -1)) 
console.log("", Math.random() * 1000)
console.log(repeatString('', 10))
// Do not edit below this line
module.exports = repeatString;
