const sumAll = function(a,b) {
    let sum = 0;
    console.log(typeof b);
    if(a < 0 || b < 0 || typeof a != typeof 1 || typeof b != typeof 2){
        return "ERROR";
    }
    else if(a > b){
        for(let i = b; i <= a; i++){
            sum += i;
        }
    }else{
        for(let i = a; i <= b; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
