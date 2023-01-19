// JavaScript Document
//let x = document.getElementsByTagName("button").innerHTML
//console.log(x)
let x = document.getElementById("home-score")
let y = document.getElementById("guest-score")

let count1 = 0
let count2 = 0

x.innerHTML = count1
y.innerHTML = count2
function homeInc(value){
        count1 += value
        x.innerHTML = count1
}

function guestInc(value){
        count2 += value
        y.innerHTML = count2
}