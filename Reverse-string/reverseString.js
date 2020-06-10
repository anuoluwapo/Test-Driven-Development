const reverseString = function(word) {
    let reverseStr = word.split('').reverse().join('');
    return reverseStr;
}

// Is the same as this:
// var reverseString = function(string) {
//     return string.split('').reverse().join('') 
// }

module.exports = reverseString