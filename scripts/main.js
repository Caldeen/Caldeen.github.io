const myHeading = document.querySelector('h1');
myHeading.textContent = testing('NOTHING OF VALUE HERE');

let button = document.querySelector('button');
button.onclick=onButton;

function onButton (){
    let date = new Date ();
    if(!isNaN(parseFloat(myHeading.textContent))){
        myHeading.textContent=parseFloat(myHeading.textContent)+Math.sin(date.getMilliseconds());
    }
    else{
        myHeading.textContent=Math.sin(date.getMilliseconds());  
    }
}function testing(str1){

    return str1;
}