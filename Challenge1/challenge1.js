// --- Directions for the Classic Fizzbuzz ---
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.

// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

  
const n = 99;
    for (let i = 1; i < n; i++) {
        if( i % 3 === 0) {
            console.log('fizz');
        } else if( i % 5 === 0) {
            console.log('buzz');
        } else if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else {
            console.log(i);
        }
    }
  


    function randomNum() {
       let x = Math.floor(Math.random() * 100)
       if (x < n) {
        return x;
       }
    }

        // testing randomNum
    // let num = randomNum();
    // console.log(num);