window.addEventListener('load', function () {
    
    
    let answer = document.getElementById('answer');
    
    let x = 0;
  
    
        let addition = document.getElementById('add');
    addition.addEventListener('click', function () {
let box1 = document.getElementById('first_number'); 
let y = parseInt(box1.value);
let box2 = document.getElementById('second_number');
let z = parseInt(box2.value) ;
        x = y + z;
        // answer.textContent = "Answer: " + x;
        console.log(x);
    });
    
    let subtraction = document.getElementById('subtract');
    subtraction.addEventListener('click', function () {
let box1 = document.getElementById('first_number'); 
let y = parseInt(box1.value);
let box2 = document.getElementById('second_number');
let z = parseInt(box2.value) ;
        x = y - z;
        // answer.textContent = "Answer: " + x;
        console.log(x);
    });

    let multiply = document.getElementById('multiply');
    multiply.addEventListener('click', function () {
let box1 = document.getElementById('first_number'); 
let y = parseInt(box1.value);
let box2 = document.getElementById('second_number');
let z = parseInt(box2.value) ;
        x = y * z;
        // answer.textContent = "Answer: " + x;
        console.log(x);
    });

     let divide = document.getElementById('divide');
    divide.addEventListener('click', function () {
let box1 = document.getElementById('first_number'); 
let y = parseInt(box1.value);
let box2 = document.getElementById('second_number');
let z = parseInt(box2.value) ;
        x = y / z;
        // answer.textContent = "Answer: " + x;
        console.log(x);
    });
  
  let calculate = document.getElementById('calculate');
  calculate.addEventListener('click', function () {
      answer.textContent = "Answer: " + x;
  })




});
console.log('testing');

//     let calculate = document.getElementById('calculate')
    // calculate.addEventListener('click', function () {
    //     answer.textContent = "Answer: " + x;
    // }); 


  