const removeFromArray = function(...args) {
    let arr = args[0];
    let newArr = [];
    arr.filter(e => {
        if(!args.includes(e)){
            newArr.push(e);
        }
    });
    return newArr;
}

module.exports = removeFromArray