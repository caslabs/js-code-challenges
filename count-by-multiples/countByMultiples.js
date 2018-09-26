module.exports = function countByMultiples(length, x) {
  // write your code in here
  var MultipleArray = [ ];
  var numSeq = x;
  console.log(10%2);

  while (MultipleArray.length < length) {
      if (numSeq % x == 0) {
        MultipleArray.push(numSeq)
      }
      numSeq++;
  }

  return MultipleArray;
}