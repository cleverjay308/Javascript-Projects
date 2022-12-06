//Set initial count::
let count = 0;


//Select your Objects
const value = document.getElementById("value");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");

// Did the maths here
increase.addEventListener("click", function() {
    count++;
    value.textContent = count;
    changeColor();
});
decrease.addEventListener("click", function () {
    count--;
    value.textContent = count;
    changeColor();
});
reset.addEventListener("click", function () {
    count = 0;
    value.textContent = count;
    changeColor();
});

function changeColor() {
    if (count > 0) {
        value.style.color = "green";
    }
    else if (count < 0) {
        value.style.color = "red";
    }
    else {
        value.style.color = "#000";
    }
};

 
