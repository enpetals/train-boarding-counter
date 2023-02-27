// let myAge = 32

// console.log(myAge)



// // let myAge
// let humanDogRatio = 7


// myDogAge = myAge * humanDogRatio


// console.log(myDogAge)


// let bonusPoint = 50
// bonusPoint = bonusPoint + 50

// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)


// function edugoogle() {
//     console.log(42)

// }

// edugoogle()


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum (){
//  total=lap1 + lap2 + lap3
//  console.log(total)
// }
// lapSum()
let countEl = document.getElementById("counter")
let count = 0


function increment (){
    // count = count + 1
    count += 1

    countEl.innerText = count
}

function save() {
    console.log(count)
    let newCount = count + " - "

    // saveEl.innerText += newCount
    saveEl.textContent += newCount
    countEl.textContent = 0
    count = 0

}

let saveEl = document.getElementById("save-el")



// To modify an empty paragraph in a html document.

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Henry"
// let greeting = "Welcome back"

// welcomeEl.innerText = greeting + " " + name
// console.log(welcomeEl)


