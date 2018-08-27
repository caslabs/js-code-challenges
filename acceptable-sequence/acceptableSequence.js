module.exports = function acceptableSequence(str) {
    //check to see if string has any alphabetic
    var theGodEquation = /[\+][a-zA-Z][\+]/ //has '+[letter]+' pattern
    var brokenLeft = /[^+][a-z][+]/ //has + on left but not right
    var brokenRight = /[+][a-z][^+]/ //has + on right but not left
    var newstr = '<' + str + '>' //incase letters is in the start or end. if has, then return false

    if (theGodEquation.test(newstr) && !brokenLeft.test(newstr) && !brokenRight.test(newstr)) {
        /*
        if string has god equation and 
        has '+' character surrounded left and right
        return true
        */
            return true
    } else 
        return false;
    }