const button=document.querySelector('button');
const h1=document.querySelector('h1');
var newc;

button.addEventListener('click', function() {
    const newColor=makeRandColor();
    document.body.style.backgroundColor= newColor;
    h1.innerText= newColor;
    console.log(newc);
    if(newc<300){
        h1.style.color='white';
    }else{
        h1.style.color='black';
    }
});

const makeRandColor= () => {
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    newc=`${r+g+b}`;
    console.log(newc);
    return `rgb(${r},${g},${b})`;
}
