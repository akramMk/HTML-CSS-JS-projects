const totalEl = document.getElementById('total-counter')

const ramainingEl = document.getElementById('remaining-counter')

const textareaEl = document.getElementById('textarea')

total = 0

updateCounter()
updateRemaining()
textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
    updateRemaining()
})

function updateCounter(){
    totalEl.innerText = textareaEl.value.length
}

function updateRemaining(){
    ramainingEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
}
