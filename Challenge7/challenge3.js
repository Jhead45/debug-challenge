let fName = 'John';
let lName = 'Doe';
let qty = '3';




let input1 = document.getElementById('myFirstName').textContent = fName;
let input2 = document.getElementById('myLastName').textContent = lName;
let input3 = document.getElementById('qty').textContent = qty;

// console.log(input3);



if(input1 === 'John' && input2 === 'Doe' && input3 === 3) {
    console.log('success');
    let time = '2';
    let timeBox = document.getElementById(theTime).textContent = time;
    console.log(timeBox);
    
}















// Do not change this

function orderNow() {
   let firstName = document.getElementById('myFirstName').value;
   let lastName = document.getElementById('myLastName').value;
   let qty = document.getElementById('qty').value;
   let time = document.getElementById('theTime')[2].value;
  
   if ( firstName == 'John' && lastName == 'Doe') {
       if (qty == 3) {
           if(time == 2) {
               console.warn('SUCCESS!');
           }
       }
   }
 
}