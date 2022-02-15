const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(`.color`);
const btn2 = document.querySelector(`#btn2`);
btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    const randomNumber2 = getRandomNumber2();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    btn2.style.backgroundColor = colors[randomNumber2];
    btn2.style.color = `white`;
    color.textContent = colors[randomNumber];

    // console.log(document.body)
})
// console.log(color)
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function getRandomNumber2() {
    return Math.floor(Math.random() * colors.length);
}