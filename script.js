<<<<<<< HEAD
    
   const firstQuestions =  prompt("Please type first number:");
   const add1Number = parseInt(firstQuestions);
   const secondQuestions =  prompt("Please type second number:");
   const add2Number = parseInt(secondQuestions);
          /*multipl block*/
   const needMult = prompt("Do you want multiply?")
   if (firstQuestions && secondQuestions && needMult === 'yes'){
   console.log( 'Your result:' + firstQuestions * secondQuestions);
   } else if(needMult != 'yes'){
          /*summ block*/
       const needSumm = prompt("Do you want summ?")
        if(needSumm === 'yes'){
        console.log( 'Your result:' + firstQuestions + secondQuestions);
        }else if(needSumm != 'yes'){
          /* divide block*/
             const needDivi = prompt("Do you want divide?")
             if(needDivi === 'yes'){
             console.log( 'Your result:' + firstQuestions / secondQuestions);
          }
        }
  }
/* example*/

 
=======

const inputFirstNum = document.querySelector('#calculator-a');
const inputSecondNum = document.querySelector('#calculator-b');

const inputs = document.querySelectorAll('.input');

const sumBtn = document.querySelector('#sum_btn');
const productBtn = document.querySelector('#product_btn');

const clearBtn = document.querySelector('.clear');

const result = document.querySelector('.text_result');

const buttonsWrap = document.querySelector('#button_wrap');

const buttons = document.querySelectorAll('.get-result_btn');

const welcomeText = document.querySelector('.welcome');

    setTimeout(() => {
      welcomeText.classList.add('scale-in-center');
      welcomeText.getElementsByClassName.display = 'flex';
      inputFirstNum.autofocus;
    }, 2000);

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

const clear = (el) => {
  el.innerHTML = '';
}

const clearInputs = () => inputs.forEach((el) => {
  el.value = '';
});

buttons.forEach((button) => {
  button.addEventListener('click', (element) => {
    element.preventDefault();
    const firstValue = Number(inputFirstNum.value);
    const secondValue = Number(inputSecondNum.value);
    if (element.target.classList.contains('sum_result_btn')) {
      const resOfSum = sum(firstValue, secondValue);
      result.innerHTML = resOfSum; 
    } else if (element.target.classList.contains('product_result_btn')) {
      const resOfMultiply = multiply(firstValue, secondValue);
      result.innerHTML = resOfMultiply;
    } else {
      clear(result);
      clearInputs();
    }
  })
});
>>>>>>> 961e48d9550bc4eec31e764e08f53267c9e6b494
