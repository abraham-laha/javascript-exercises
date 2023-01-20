const palindromes = function (pal) {
    pal = pal.replaceAll(".","");
    pal = pal.replaceAll(" ","");
    pal = pal.replaceAll(",","");
    pal = pal.replaceAll("!","");
    pal = pal.toLowerCase();
    for(i=0; i <= pal.length/2 - 1; i++){
        if(pal.charAt(i)!= pal.charAt(pal.length -1 -i)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
