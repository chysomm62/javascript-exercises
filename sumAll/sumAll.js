const sumAll = function(a,b) {

    let sum = 0;
    for(i=a;i<=b;i++){
            sum += i;
    }const typea = typeof(a);
    const typeb = typeof(b);

    if ((typea === NaN) || (typeb === NaN) || (Array.isArray(typea)) || (Array.isArray(typeb))){
        return "ERROR";
    }
    else if (typea === 'number' && typeb === 'number'){
        if((a > 0) && (b > 0)){
            
            return sum; 
            
        }
        else if ((a < 0) || (b < 0)){
            return "ERROR";
        }
        else if (a > b){
            const changer = a;
            a = b;
            b = changer;
            return sum;
        }
        else {
        }
    }
    else{
        return "ERROR";
    }
     
};

sumAll(1,10);
module.exports = sumAll;
