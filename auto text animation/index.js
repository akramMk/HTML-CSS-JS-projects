const containerEl = document.querySelector(".container")

const career = ["Developper", "Student", "Instructor"]

let careerIndex = 0;
let characterIndex = 0;

// containerEl.innerHTML = "<h1>I am a "
updateText()

function updateText() {
    containerEl.innerHTML = `<h1>I am ${career[careerIndex].slice(0,1) === 'I' ? "an" : "a"} ${career[careerIndex].
        slice(0,characterIndex)
    }</h1>`

    characterIndex++;
    if (characterIndex > career[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex == career.length) {
        careerIndex = 0;
        characterIndex = 0;
    }
    setTimeout(updateText, 300)
}
