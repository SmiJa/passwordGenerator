// Grabbing the elements of the page
const passwordBox = document.querySelector("#password-box");
const copyBtn = document.querySelector("#copy-btn");
const length = document.querySelector("#length");
const numbersSelection = document.querySelector("#numbers");
const specialSelection = document.querySelector("#special");
const generatorBtn = document.querySelector("#generate-btn");

// Setting up the arrays
const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7 , 8, 9];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '_'];

const charOptionsArr = [lowerLetters, upperLetters];

function randNum(num) {
    return Math.floor(Math.random() * num);
}

generatorBtn.addEventListener("click", function(e) {
    e.preventDefault;
    let password = "";
    let resetArr;

    if (numbersSelection.checked) {
        charOptionsArr.push(numbers);
    }

    if (specialSelection.checked) {
        charOptionsArr.push(specialCharacters);
    }
    
    for (let i = 0; i < length.value; i++) {
        let newRand = randNum(charOptionsArr.length);
        // console.log(newRand);
        let currentArr = charOptionsArr[newRand];
        // console.log(currentArr);
        let item = currentArr[randNum(currentArr.length)];

        password += item;
        // console.log(item);
    }
    
    resetArr = charOptionsArr.splice(2);

    passwordBox.innerHTML = password;
    console.log(password);
});

copyBtn.addEventListener("click", function(e) {
    let copiedText = passwordBox.innerHTML.trim();

    navigator.clipboard.writeText(copiedText);
    alert("You have coppied the password.");
});