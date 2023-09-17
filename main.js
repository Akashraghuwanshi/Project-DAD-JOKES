
const btnElement =document.getElementById("btn");

const jokeElement=document.getElementById("joke");

const apiKey="W77KSAvlEN3mzGx0Ng4lAw==cNlcxqvsaiQmJ9DY";




const getDadJoke = async()=>{
   
    try {
         //loading effect

jokeElement.innerHTML ="Upadting...";

//button disabled
btnElement.disabled =true;
//button loading effect
btnElement.innerHTML ="Loading...";

const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
        method:'GET',
        headers:{
            'X-Api-Key': apiKey,
        }
        })
    const jsonResponse = await response.json();
    //button should work now
    btnElement.disabled =false;
    btnElement.innerHTML="Tell me a joke";
    console.log(jsonResponse[0].joke);
    const myJoke = jsonResponse[0].joke;
    
    jokeElement.innerHTML= myJoke;
    
    
}
     catch (error) {

        jokeElement.innerHTML="An error happened, try again later.. ";
        btnElement.disabled =false;
        btnElement.innerHTML="Tell me a joke";
        console.log(error);
    }

}
   
btnElement.addEventListener("click",getDadJoke);


    
    

