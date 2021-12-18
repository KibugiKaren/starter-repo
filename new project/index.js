let count = 0;
let sum = 0;
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
console.log(countEl)
let sumEl = document.getElementById('sum-el')
console.log(sumEl)

let increment = () => {
    count += 1
    countEl.textContent = count
}

let save = () => {
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    countEl.textContent = 0
    sum = sum + count

    count = 0 
    
    console.log(count)
}

let add = () => {
    sumEl.textContent = sum 
}












 