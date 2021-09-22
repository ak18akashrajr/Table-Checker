let inputEl=document.getElementById("input-el");
let inputMultiplier=document.getElementById("input-multiplier");
let outputEl=document.getElementById("output-el");
let titleEl=document.getElementById("title-el");



function tables() {
    console.log(inputEl.value);
    console.log(inputMultiplier.value);
    
    for (let i=1;i<=Number(inputMultiplier.value);i++){
        
        outputEl.innerHTML+=inputEl.value+" X "+i+" = "+Number(inputEl.value)*i+"<br>";

    }
}

