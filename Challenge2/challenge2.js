let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let favNum = 7;
let toggle = false;

// Original Code


for(let i = 0; i <= 10; i++) {
    console.log(i);
    if(i == favNum) {
        console.log('stop');
        break;
    }
}

// Re-written attempt

// nums.forEach(function(num) {
//     console.log(num);
//     if(num == favNum) {
//         console.log('stop');
//         break;
//     }
// })












function blastOff() {
    console.log('When a for loop is used we are mutating variabes to increment or decrement.')
   for (let i = 0; i < 3; i++) {
    console.log(`${i} is mutated to ${i++}`);
   }
}



























if(toggle == true) {
    console.log('One of the most common ways people mutate variables is by using for loops, another common way is by using booleans like this toggle.');
}