const removeFromArray = (array, ...b) => {
    let newArray = [];
    array.forEach((e) => {
        if(!b.includes(e)){
            newArray.push(e);
        }
    })

    return newArray;
};

module.exports = removeFromArray;
