const a = document.querySelector("#calculator-a");
const b = document.querySelector("#calculator-b");
const sum = document.querySelector("#sum");
const multiply = document.querySelector("#product")

function multiply(a, b) {
    return a * b;
  };
  
  function sum(a, b) {
    return a + b;
  };
  
  function calculator3 = (callback, a, b) => {
    element.preventDefault();
    a=Number(a.value)
    b=Number(b.value)
    console.log(
      `The result is ${callback == sum ? (a+b) : (a*b)} :D`
    )
  };
function change(){
    document.getElementById("result").innerHTML = calculator3; 
};
  
  /* remove this part when .getelementbyidis working
  calculator4(sum, a, b);
  calculator4(multiply, a, b);*/