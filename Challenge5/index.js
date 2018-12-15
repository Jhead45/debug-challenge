// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {}

var reverse = function(num) {
    
    const numToStr = num.toString(); 
    let rStr = ''; 
    let reversedInt = 0;
    let sign = Math.sign(num);
    
    for (let num of numToStr) {
        rStr = rStr + num; 
    }

    reversedInt = parseInt(rStr);

    if (reversedInt > Math.pow(2, 31)){
        return 0
    }
    
    return parseInt(rStr) * sign;
    
};

console.log(reverse(process.argv[2]));