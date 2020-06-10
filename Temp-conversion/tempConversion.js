const ftoc = function(f) {
  let c = (f - 32) * 5/9;
  return parseFloat(c.toFixed(1));
}

const ctof = function(c) {
  let f = c * 9/5 + 32;
  return parseFloat(f.toFixed(1));
}

// Is the same as this:

// var ftoc = function(f) {
//   return Math.round((f - 32) * (5/9) * 10) / 10
//  }
 
//  var ctof = function(c) {
//    return Math.round(((c * 9/5) + 32) * 10) / 10 
//  }
 
//  module.exports = {
//    ftoc,
//    ctof
//  }

module.exports = {
  ftoc,
  ctof
}

