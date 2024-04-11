let msg = document.querySelector("#msg");

function calculateTax() {
  let popup = document.getElementById("popup");
  let age = document.getElementById("age").value;
  let income = parseFloat(document.getElementById("income").value);
  let extraIncome = parseFloat(document.getElementById("extraIncome").value);
  let deductions = parseFloat(document.getElementById("deductions").value);
  let taxRate;

  if (age === "" || isNaN(income) || isNaN(extraIncome) || isNaN(deductions)) {
    msg.style.display = "block";
    return;
  }
  msg.style.display = "none";
  popup.style.top = "150px";

  if (age === "<40") {
    taxRate = 0.3;
  } else if (age === ">=40 - <60") {
    taxRate = 0.4;
  } else if (age === ">=60") {
    taxRate = 0.1;
  }

  var overallIncome = income + extraIncome - deductions;

  var taxAmount;
  if (overallIncome <= 800000) {
    taxAmount = 0;
  } else {
    taxAmount = taxRate * (overallIncome - 800000);
  }
  document.getElementById("result1").innerHTML =
    "Tax Amount: " + taxAmount.toFixed(2);
  var overallAmount = overallIncome - taxAmount;
  document.getElementById("result2").innerHTML =
    "Overall Income: " + overallAmount.toFixed(2);
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.top = "-250px";
}

function handleInput(event) {
  let inp = event.target.value;
  let errorIcon = event.target.nextElementSibling;
  if (isNaN(inp)) {
    errorIcon.style.display = "inline-block";
    errorIcon.dataset.errorMessage = "Please enter numbers only";
  } else {
    errorIcon.style.display = "none";
  }
}
