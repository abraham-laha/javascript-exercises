const removeFromArray = function (arr) {
    args = Array.from(arguments);
    let j = 0;
    for (let arg of args) {
        if (!j) {
            j++;
            continue;
        }
        let i = 0;
        for (let a of arr) {
            
            if (a === arg) {
                arr.splice(i, 1);

                continue;
            }
            i++;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
