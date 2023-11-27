const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
const header=document.querySelector(".header")
console.log(header)


buttons.forEach((button)=>{
   button.addEventListener('click',(e)=>{
    const id=e.target.id 
    switch(id){
        case "white":
            body.style.backgroundColor=e.target.id
            // header.style.backgroundColor=e.target.id
            break
        case "yellow":
            body.style.backgroundColor=e.target.id
            // header.style.backgroundColor=e.target.id
            break
        case "grey":
            body.style.backgroundColor=e.target.id
            // header.style.backgroundColor=e.target.id
            break
        case "blue":
            body.style.backgroundColor=e.target.id
            // header.style.backgroundColor=e.target.id
            break
    }


   })


})