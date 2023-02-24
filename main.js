let res = "";
let firstNum = "";
let secondNum = "";
let sign = "";

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]

let result = document.querySelector(".result");
let allBtn = document.querySelector(".buttons");

// Цифры
allBtn.addEventListener("click", function (e) {

    let key = e.target.textContent;

    if (numbers.includes(key)) {
        if (sign === "") {
            firstNum += key;
            result.textContent = firstNum;
            // console.log(firstNum);
        };
        if (sign !== "") {
            secondNum += key;
            result.textContent = secondNum
            // console.log(secondNum);
        };
    }
})


//Знаки + - / *
let plus = document.querySelector(".plus");
plus.addEventListener("click", signFunc);

let minus = document.querySelector(".minus");
minus.addEventListener("click", signFunc);

let multi = document.querySelector(".multi");
multi.addEventListener("click", signFunc);

let division = document.querySelector(".division");
division.addEventListener("click", signFunc);

function signFunc() {
    sign = this.textContent
    result.textContent = sign
    // console.log(sign);
}


// АС (Удалить все)
let del = document.querySelector(".ac");
del.addEventListener("click", function () {
    firstNum = "";
    secondNum = "";
    sign = "";
    result.textContent = "";
});


// Знак равно
let equals = document.querySelector(".equals");
equals.addEventListener("click", equalFunc);
function equalFunc() {
    switch (sign) {
        case "+":
            res = Number(firstNum) + Number(secondNum)
            result.textContent = res;
            firstNum = res;
            secondNum = "";
            break;
        case "-":
            res = Number(firstNum) - Number(secondNum)
            result.textContent = res;
            firstNum = res;
            secondNum = "";
            break;
        case "/":
            res = Number(firstNum) / Number(secondNum)
            result.textContent = res;
            firstNum = res;
            secondNum = "";
            break;
        case "X":
            res = Number(firstNum) * Number(secondNum)
            result.textContent = res;
            firstNum = res;
            secondNum = "";
            break;
    }
}

let night = document.querySelector("#checkbox");
let wrapper = document.querySelector(".wrapper");
let header = document.querySelector(".header");

night.addEventListener("click", changeFunc)
    function changeFunc(){
      document.body.classList.toggle("night"); 
      wrapper.classList.toggle("night-wrapper");
      header.classList.toggle("night-header");
      result.classList.toggle("night-result")
    }