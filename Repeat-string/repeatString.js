const repeatString = function(string, num) {
    let str;
    if(num === 0) {
        str = '';
}else if(num < 0){
    str = 'ERROR';
}else{
        str = string;
}
    for(i=1; i<num; i++){
        str+=string;
    }
    return str;
}

// Is the same as this: 
// var repeatString = function(word, times) {
//     if (times < 0) return 'ERROR'
//     let string = ''
//     for (let i = 0; i < times; i++) {
//       string += word
//     }
//     return string
//   }

module.exports = repeatString