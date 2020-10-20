function multiply(a, b) {
    return a * b;
  };
  
  function sum(a, b) {
    return a + b;
  };
  
  const calculator3 = (callback, a, b) => {
    console.log(
      `The result is ${callback == sum ? (a+b) : (a*b)} :D`
    )
  };
calculator3(sum, a, b);
calculator3(multiply, a, b);

a.getElementById("calculator-a");
b.getElementById("calculator-b")
  
  /* remove this part when .getelementbyidis working
  calculator4(sum, a, b);
  calculator4(multiply, a, b);*/