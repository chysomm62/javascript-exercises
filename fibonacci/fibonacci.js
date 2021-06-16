const fibonacci = function(input) {
    if(input < 0){
        return "OOPS";
    }
    if(input === 0){
        return 0;
    }
    let a = 1;
    let b = 0; 
    for(let i=1;i<input;i++){
        const temp = a;
        console.log(temp);
        a = a + b;
        b = temp;
    }
    return a;
};

module.exports = fibonacci;
