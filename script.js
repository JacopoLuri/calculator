
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

const errorWrap = document.querySelector(".error");
const errorInnerWrap = document.querySelector(".typewriter");
const errorMessage = 'Oh! I can calculate only nubmers!';

const i = 0;
const speed = 90;

setTimeout(() => {
  welcomeText.classList.add('scale-in-center');
  welcomeText.getElementsByClassName.display = 'flex';
  inputFirstNum.autofocus;
}, 2000);

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;
const substraction = (a, b) => a - b;
const divide = (a, b) => a / b;


const clear = (el) => {
  el.innerHTML = '';
}

const clearInputs = () => inputs.forEach((el) => {
  el.value = '';
});

const errorMsg = () => {
  alert('Heeey');
}

const validate = (str) => {
  const reg = /^\d+$/;
  return str.match(reg) ? str : false;
}

const typeWriter = () => {
  if (i < errorMessage.length) {
    errorWrap.classList.remove('scale-out-center');
    errorWrap.classList.add('scale-in-center');
    errorInnerWrap.innerHTML += errorMessage.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  setTimeout(() => {
    errorWrap.classList.remove('scale-in-center');
    errorWrap.classList.add('scale-out-center');
    errorInnerWrap.innerHTML = '';
  }, 5000)
}

buttons.forEach((button) => {
  button.addEventListener('click', (element) => {
    element.preventDefault();
    const firstValue = inputFirstNum.value;
    const secondValue = inputSecondNum.value;

    if (element.target.classList.contains('sum_result_btn')) {
      if(validate(firstValue) && validate(secondValue)) {
        const resOfSum = sum(Number(firstValue), Number(secondValue));
        result.innerHTML = resOfSum.toFixed(3); 
      } else {
        typeWriter(errorMessage, 0, 50);
        clearInputs()
      }
      
    } else if (element.target.classList.contains('product_result_btn')) {
      if (validate(firstValue) && validate(secondValue)) {
        const resOfMultiply = multiply(Number(firstValue), Number(secondValue));
        result.innerHTML = resOfMultiply.toFixed(3);
      } else {
        typeWriter(errorMessage, 0, 50);
        clearInputs()
      }
      
    } else if (element.target.classList.contains('substraction_result_btn')){
      if (validate(firstValue) && validate(secondValue)) {
        const resOfSubtraction = substraction(Number(firstValue), Number(secondValue));
        result.innerHTML = resOfSubtraction.toFixed(3);
      } else {
        typeWriter(errorMessage, 0, 50);
        clearInputs()
      }
    } else if (element.target.classList.contains('divide_result_btn')) {
      if (validate(firstValue) && validate(secondValue)) {
        const resOfDivide = divide(Number(firstValue), Number(secondValue));
        result.innerHTML = resOfDivide.toFixed(3);
      } else {
        typeWriter(errorMessage, 0, 50);
        clearInputs()
      }
    } else {
      clear(result);
      clearInputs();
    }
  })
});
