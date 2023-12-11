let count = 0;
let myCount = document.getElementById("my-count")

function increment() {
    count += 1
    myCount.innerText = count
}

function decrement() {
    count -= 1
    myCount.innerText = count
    // if (myCount.innerText === 0) {
        
    // }


}

// function power(base, exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base ** exponent;
//     }
// }
const saveEl = document.getElementById("save-el")

function save ()    {
    let cfr = ` ${count} -`
    saveEl.innerText += cfr

    myCount.innerText = 0;
    count = 0;
}

// const welcomeEl = document.getElementById("welcome-el")

// let name = "Waziri"
// let greeting = "Hi, my name is "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "👋"

