let randomNum=Math.floor(Math.random()*100+1)

const yourChoice=document.querySelector("#guessField")
const submit=document.querySelector("#sbt")
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHigh=document.querySelector('.loworHigh')
const startOver=document.querySelector('.resultParase')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=10
let playGame=true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(yourChoice.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess<1){
        alert("Please enter a positive number")
    }
    else if(guess>100){
        alert("Please enter a number less than 101")
    }else{
       
        if(numGuess==1){
            displayGuess(guess)
            displayMessage(`Game over, Random number was ${randomNum}`)
            endGame()
        }else{
            prevGuess.push(guess)
            displayGuess(guess)
            checkGuess(guess)

        }
    }

}

function checkGuess(guess){

    if(guess==randomNum){
        displayMessage(`Your guessed it right`)
        endGame()
    }else if(guess<randomNum){
        displayMessage(`Your guess is too low`)
    }else if(guess>randomNum){
        displayMessage(`Your number is too high`)
    }

}

function displayGuess(guess){
    yourChoice.value=''
    guessSlot.innerHTML+=`${guess},`
    numGuess--
    remaining.innerHTML=`${numGuess}`

}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h2>${message}</h2>`

}

function endGame(){
    yourChoice.value=''
    yourChoice.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()

}

function newGame(){

    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener("click",(e)=>{
        randomNum=parseInt(Math.floor(Math.random()*100+1))
        prevGuess=[]
        numGuess=10
        guessSlot.innerHTML=''
        remaining.innerHTML=`${numGuess}`
        yourChoice.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })

}