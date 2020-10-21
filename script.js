function sum() {
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  document.getElementById("result").innerHTML = Number(numberA) + Number(numberB);
}

function substraction() {
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  document.getElementById("result").innerHTML = Number(numberA) - Number(numberB);  
}

function product() {
  console.log(document.getElementById("numberA").value === "")
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  document.getElementById("result").innerHTML = Number(numberA) * Number(numberB); 
}

function divide() {
  console.log(document.getElementById("numberA").value === "")
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  if (numberA == "" || numberB == "" || numberB == 0 || numberA == 0) {
    document.getElementById("result").innerHTML = "black hole"
  } else {
    document.getElementById("result").innerHTML = Number(numberA) / Number(numberB);
  }  
}
