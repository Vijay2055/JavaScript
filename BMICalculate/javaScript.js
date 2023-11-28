const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
   const height = parseInt(document.querySelector("#height").value )
   const weight =parseInt(document.querySelector("#weight").value) 
   const results=document.querySelector("#result")

   if(height==="" || isNaN(height) || height<0){
    results.innerHTML="Please enter valid input"
   }
   else if(weight==="" || isNaN(weight) || weight<0){
    results.innerHTML=`Please enter your weight`
   }
   else{
    const ht_meter=height/100
    const bmi=(weight/(ht_meter**2)).toFixed(2)
    results.innerHTML=`<span>Your bmi is ${bmi}</span>`

    if(bmi<18.6){
        results.innerHTML+="<br><p>You are under weight</p>"

    }else if(bmi>=18.6 && bmi <=24.9){
        results.innerHTML+="<br><p>You are in Normal Range</p>"

    }else{
        results.innerHTML+="<br><p>You are Overweight</p>"

    }

   }

   
   

   
})