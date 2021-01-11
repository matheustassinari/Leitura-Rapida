console.log("olá Mundo");


window.newText = new WordProcessing();

let inputButtonEl = document.querySelector('#inputButton');

var campoTextoEl = document.querySelector('#campoTexto');


inputButtonEl.addEventListener('click', ()=>{

    if(document.querySelector('#campoTexto') != null){

    newText.textSeparator(campoTextoEl.value);
    
    
    }

});
