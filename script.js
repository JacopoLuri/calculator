function multiply(a, b) {
    return a * b;
  };
  
  function sum(a, b) {
    return a + b;
  };
  
  const calculator4 = (callback, a, b) => {
    console.log(
      `The result is ${callback == sum ? (a+b) : (a*b)} Teiko refractoring`
    )
  };
  
  
  calculator4(sum, 92, 27);
  calculator4(multiply, 56, 44);