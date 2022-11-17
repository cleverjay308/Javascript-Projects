const colors = ["green", "blue", "#fff", "rgb(20, 200, 210)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function change () {
    //get random number between 0 -4(array index notation)
    const randomNumber = Math.floor(Math.random() * 5);
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
});