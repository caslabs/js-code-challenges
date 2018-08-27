module.exports = function checkAscOrder(numArray) {
  // write your code in here
  var i=0;
  while (i<numArray.length) { //loops array
    var a = numArray[i]; //starting index
    var j = numArray[i+1]; //gets index to the right
    if (a < j) {
      i++
    } else {
      return false; //false when a > j
    }
    //if the order is all good, return true.
    return true;
  }
}