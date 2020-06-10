const sumAll = function(a, b) {
    let sum = 0;
    if((a < 0 || b< 0) || (typeof a !=='number' || typeof b !=='number')){
        return 'ERROR';
    }
    else if(b > a){
        for(let i=a; i>=a && i<=b; i++){
            sum+=i;
        }
    }else{
        for(let i=a; i<=a && i>=b; i--){
            sum+=i;
        }
    }
    
    return sum;
}

// Is the saame as this:

// const sumAll = function(min, max) {
//     if (min < 0 || max < 0) return "ERROR";
//     if (typeof min !== "number" || typeof max !== "number") return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
//     let sum = 0;
//     for (let i = min; i < max + 1; i++) {
//       sum += i;
//     }
//     return sum;
//   };

module.exports = sumAll