const reverseString = function(string) {
    let array = string.split("");
    let reversed = array.reverse();
    let joined = reversed.join("");

    return joined;
};

module.exports = reverseString;
