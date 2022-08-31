const funcs = {
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  division: function (num1, num2) {
    return num1 / num2;
  }
};

document.getElementById("multiply").addEventListener("click", function (e) {
  e.preventDefault();

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("muldiv").innerHTML =
    "Multiplication of 2 numbers : " + funcs.multiply(num1, num2);
});

document.getElementById("division").addEventListener("click", function (e) {
  e.preventDefault();
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num2 === "0") {
    document.getElementById("error").innerHTML = "Divide by zero not possible";
  } else {
    document.getElementById("error").innerHTML = "";
    document.getElementById("muldiv").innerHTML =
      "Division of 2 numbers : " + funcs.division(num1, num2);
  }
});
