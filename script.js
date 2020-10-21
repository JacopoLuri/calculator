function sum() {
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  if (Number(numberA) + Number(numberB) > 1000000) {
    document.getElementById("result").innerHTML = "∞";
  } else if (Number(numberA) + Number(numberB) < -1000000) {
    document.getElementById("result").innerHTML = "-∞";
  } else if (Number(numberA) + Number(numberB) < 0.0000001 && Number(numberA) + Number(numberB) > 0) {
    document.getElementById("result").innerHTML = "0<sup>+</sup>";
  } else if (Number(numberA) + Number(numberB) > -0.0000001 && Number(numberA) + Number(numberB) < 0) {
    document.getElementById("result").innerHTML = "0<sup>-</sup>";
  } else {
    document.getElementById("result").innerHTML = Number(numberA) + Number(numberB);
  }
}

function substraction() {
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  if (Number(numberA) - Number(numberB) > 1000000) {
    document.getElementById("result").innerHTML = "∞";
  } else if (Number(numberA) - Number(numberB) < -1000000) {
    document.getElementById("result").innerHTML = "-∞";
  } else if (Number(numberA) - Number(numberB) < 0.0000001 && Number(numberA) - Number(numberB) > 0) {
    document.getElementById("result").innerHTML = "0<sup>+</sup>";
  } else if (Number(numberA) - Number(numberB) > -0.0000001 && Number(numberA) - Number(numberB) < 0) {
    document.getElementById("result").innerHTML = "0<sup>-</sup>";
  } else {
    document.getElementById("result").innerHTML = Number(numberA) - Number(numberB);
  }  
}

function product() {
  console.log(document.getElementById("numberA").value === "")
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  if (Number(numberA) * Number(numberB) > 1000000) {
    document.getElementById("result").innerHTML = "∞";
  } else if (Number(numberA) * Number(numberB) < -1000000) {
    document.getElementById("result").innerHTML = "-∞";
  } else if (Number(numberA) * Number(numberB) < 0.0000001 && Number(numberA) * Number(numberB) > 0) {
    document.getElementById("result").innerHTML = "0<sup>+</sup>";
  } else if (Number(numberA) * Number(numberB) > -0.0000001 && Number(numberA) * Number(numberB) < 0) {
    document.getElementById("result").innerHTML = "0<sup>-</sup>";
  } else {
    document.getElementById("result").innerHTML = Number(numberA) * Number(numberB);
  } 
}

function divide() {
  console.log(document.getElementById("numberA").value === "")
  const numberA = document.getElementById("numberA").value;
  const numberB = document.getElementById("numberB").value;
  if (Number(numberA) / Number(numberB) > 1000000) {
    document.getElementById("result").innerHTML = "∞";
  } else if (Number(numberA) / Number(numberB) < -1000000) {
    document.getElementById("result").innerHTML = "-∞";
  } else if (Number(numberA) / Number(numberB) < 0.0000001 && Number(numberA) / Number(numberB) > 0) {
    document.getElementById("result").innerHTML = "0<sup>+</sup>";
  } else if (Number(numberA) / Number(numberB) > -0.0000001 && Number(numberA) / Number(numberB) < 0) {
    document.getElementById("result").innerHTML = "0<sup>-</sup>";
  } else {
    document.getElementById("result").innerHTML = Number(numberA) / Number(numberB);
  }  
}
