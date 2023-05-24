const express=require('express');
const app=express();

app.get("/khus005",(req,res)=>{
    res.send("this is running on localhost");
    alert("Welcome to guessing game!");
let maximum=parseInt(prompt("enter the maximum number"));
while(!maximum){
    maximym=parseInt(prompt('enter a valid number:'));
}

const randomNum=Math.floor(Math.random()*maximum)+1;

let guessNum=parseInt(prompt("enter your guess"));
let attempts=1;

while(parseInt(guessNum)!==randomNum){
    if(guessNum==='q') break;
    attempts++;
    if(guessNum>randomNum){
        guessNum=prompt("too high! Guess again:");
    }else{
        guessNum=prompt("too low! Guess again:");
    }
}
if(guessNum==='q'){
    console.log('OK YOU QUIT!!');
}else{
    console.log(`you got it after ${attempts} guesses, the correct number was ${randomNum}`);
}
});
app.listen(8000,()=>{
    console.log("app is running 8000...");
});