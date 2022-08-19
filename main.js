let numbers = document.querySelectorAll(".column .number");
let result = document.getElementById("result");
let operators = document.querySelectorAll(".operators .operator");
let equalBtn = document.getElementById("equal-btn");
let res = document.getElementsByClassName("result");
let deleteBtn = document.getElementById("delete-btn");
let delOneELm = document.getElementById("del-one-el");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    result.innerHTML += e.target.innerHTML;
    
    if (
      result.innerHTML.slice(0, 1) == 0 ||
      result.innerHTML.slice(0, 1) == "."
    ) {
      result.innerHTML = "";
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", (e) => {
    result.innerHTML += e.target.innerHTML;

    if (
      result.innerHTML.slice(0, 1) == "+" ||
      result.innerHTML.slice(0, 1) == "-" ||
      result.innerHTML.slice(0, 1) == "*" ||
      result.innerHTML.slice(0, 1) == "/"
    ) {
      result.innerHTML = "";
    }
  });
}

equalBtn.addEventListener("click", () => {
  result.innerHTML = eval(result.innerHTML);
  if (result.innerHTML.split("")[result.innerHTML.length - 1] == ".") {
    result.innerHTML = result.innerHTML.slice(0, 1);
  }
});

deleteBtn.addEventListener("click", () => {
  result.innerHTML = "";
});

delOneELm.addEventListener("click", () => {
  result.innerHTML = result.innerHTML.slice(0, -1);
});