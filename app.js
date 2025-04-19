let inputValue = document.getElementById("input-box");
// console.log(inputValue)

let buttons = document.querySelectorAll("button");
// console.log(buttons)

let result = "";

let buttonsArr = Array.from(buttons);
// console.log(buttonsArr)

buttonsArr.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result = eval(result);
      inputValue.value = result;
    } else if (e.target.innerHTML == "AC") {
      result = "";
      inputValue.value = result;
    } else if (e.target.innerHTML == "DEL") {
      result = result.substring(0, result.length - 1);
      inputValue.value = result;
    } else {
      result += e.target.innerHTML;
      inputValue.value = result;
    }
  });
});