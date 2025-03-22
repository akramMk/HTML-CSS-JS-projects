const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body")
console.log(inputEl.checked)

inputEl.checked = JSON.parse(localStorage.getItem("mode"))
updateBody()

function updateBody() {
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black"
        console.log("is heeere ")
    }
    else{
        bodyEl.style.backgroundColor = "white"
    }
}

inputEl.addEventListener(
    "input", ()=>{
        updateBody()
        updateLocalStorage()
    }
)

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}