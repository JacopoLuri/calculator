
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
    }, 1000);

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
