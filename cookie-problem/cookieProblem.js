module.exports = function cookieProblem(array) {
  // write your code in here
  var maxCookie = Math.max(...array);
  var cookieSUM = 0;

  array.forEach(element => {
    cookieSUM += maxCookie - element;
  });

  return cookieSUM;
}