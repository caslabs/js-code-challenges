module.exports = function checkAscOrder(numArray) {
  // write your code in here
  var i=0;
  while (i<numArray.length) {
    var a = i;
    var j = i+1;
    if (a < j) {
      i++
    } else {
      return false;
    }
  }
}