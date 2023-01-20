const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    let sum = [1,1];
    for(let i = 3; i <= num; i++){
        sum.push(sum[i-2]+sum[i-3]);
    }
    return sum[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
