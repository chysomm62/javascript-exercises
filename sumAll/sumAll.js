const sumAll = function(a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    
    if (a < 0 || b < 0) return "ERROR";
        
    if (a > b){
        const changer = a;
        a = b;
        b = changer;
    }
    let sum = 0;
    for(i=a;i<=b;i++){
            sum += i;
    }
    return sum;
};
module.exports = sumAll;
