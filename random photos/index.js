const imageContainerEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", ()=>{
    addNewImages()
});

function addNewImages(){
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 100)}}`

    imageContainerEl.appendChild(newImage)
}