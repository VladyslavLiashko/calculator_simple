let res = "";
let firstNum = "";
let secondNum = "";
let sign = "";

let result = document.querySelector(".result");
let allBtn = document.querySelector(".buttons");


// Цифры
let nine = document.querySelector(".nine");
nine.addEventListener("click", handler);

let eight = document.querySelector(".eight");
eight.addEventListener("click", handler);

let seven = document.querySelector(".seven");
seven.addEventListener("click", handler);

let six = document.querySelector(".six");
six.addEventListener("click", handler);

let five = document.querySelector(".five");
five.addEventListener("click", handler);

let four = document.querySelector(".four");
four.addEventListener("click", handler);

let three = document.querySelector(".three");
three.addEventListener("click", handler);

let two = document.querySelector(".two");
two.addEventListener("click", handler);

let one = document.querySelector(".one");
one.addEventListener("click", handler);

let zero = document.querySelector(".null");
zero.addEventListener("click", handler);

let point = document.querySelector(".point");
point.addEventListener("click", handler);

function handler() {
    if (sign === "") {
        firstNum += this.textContent;
        result.textContent = firstNum;
        // console.log(firstNum);
    }
    if (sign !== "") {
        secondNum += this.textContent
        result.textContent = secondNum
        // console.log(secondNum);
    }
};


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
function equalFunc(){
    switch(sign){
        case"+":
        res =Number(firstNum) + Number(secondNum)
        result.textContent = res ;
        firstNum = res;
        secondNum ="";
        break;
        case"-":
        res =Number(firstNum) - Number(secondNum)
        result.textContent = res ;
        firstNum = res;
        secondNum ="";
        break;
        case"/":
        res =Number(firstNum) / Number(secondNum)
        result.textContent = res ;
        firstNum = res;
        secondNum ="";
        break;
        case"X":
        res =Number(firstNum) * Number(secondNum)
        result.textContent = res ;
        firstNum = res;
        secondNum ="";
        break;
    }
}