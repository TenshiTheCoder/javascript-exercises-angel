// Test 2: Need to remove multiple elements from an array
// The array contains 4 numbers currently [1, 2, 3, 4] and I want to remove 2 and 3

const removeFromArray = function(array, ...itemsToRemove) {
  if (!Array.isArray(itemsToRemove)){
    itemsToRemove = [itemsToRemove];
  }

  for (i = array.length - 1; i >= 0; i--) {
    if (itemsToRemove.includes(array[i])) {
      array.splice(i, 1);
    }
  }
  /* return array.filter(
    item => item !== itemToRemove
  ); */
  return array;
}

console.log(removeFromArray([1, 2, 3, 4], 2, 3));
console.log(removeFromArray([1, 2, 2, 3], 2));
console.log(removeFromArray([1, 2, 3, 4], "tacos", 2));
console.log(removeFromArray([1, 2, 2, 3], 1, 2, 3, 4));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3], "1", 3));
// Do not edit below this line
module.exports = removeFromArray;


