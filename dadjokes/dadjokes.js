const jokes=document.querySelector('#jokes');
const button=document.querySelector('#button');

const getDadJokes=async() => {
    try{
        const res=await axios.get('https://icanhazdadjSoke.com/',{headers:{accept: 'application/json'}});
        return res.data.joke;
    }catch(e){
        return "NO JOKES AVAILABLE! SORRY :(";
    }
}
const addNewJoke=async()=>{
    const jokeText=await getDadJokes();
    const newLI=document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', addNewJoke);
