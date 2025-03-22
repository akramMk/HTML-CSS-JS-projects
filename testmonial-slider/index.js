
const testimonials = [
    {
        
        name: "Akram M",
        photoUrl: "https://media.istockphoto.com/id/1490133656/fr/photo/jeune-femme-utilisant-un-ordinateur-portatif-tout-en-travaillant-de-la-maison.jpg?s=1024x1024&w=is&k=20&c=hYBqbl9NvM_jmCIiN4ddCJt1TjIOQrRs4ZDDSNyPr5k=",
        text: "IT IS WHAT IT IS MY FRIEND"
    
    },
    {
        name: "Cherise G",
        photoUrl: "https://media.istockphoto.com/id/2053454704/fr/photo/portrait-dune-r%C3%A9ceptionniste-parlant-au-t%C3%A9l%C3%A9phone.jpg?s=2048x2048&w=is&k=20&c=ss7U7DCFq5pTt9vdQRrR7DpXFbL0QmPn0AnLH11jl_A=",
        text: "this is simply unbelievable ! I would be lost without Apple. The very best Not able to tell you how happy I am with Apple"
    },
    
]

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")
let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} =
    testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx >= testimonials.length) {
        idx = 0;
    }
    setTimeout(()=> {
        updateTestimonial();
    }, 1000)
}