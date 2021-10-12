// javascript

let countEl = document.getElementById("count-el") // pass in arguments for function to known with what element to work
// gets the html element(document) with "count-el" id
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    //replaces text from id "count-el" in html with count value
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    
}