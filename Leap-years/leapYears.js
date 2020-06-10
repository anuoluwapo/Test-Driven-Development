const leapYears = function(year) {
    if(year%4 === 0 && (year%100 !==0 || year%400 === 0)){
        return true;
    }else{
        return false;
    }
}
// Is the same as this: 

// var leapYears = function(year) {
//     return year % 4 === 0 && ( year % 100 !== 0 || year % 400 == 0)
//   }

module.exports = leapYears