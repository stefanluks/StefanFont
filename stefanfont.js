window.onload = () => {
    //definindo constantes do app!
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ0123456789#*@%!{}<>';
    const app = document.querySelector("#app");
    const visor = app.querySelector(".texto-stefan-font").querySelector(".corpo-texto");
    const form = app.querySelector("#entrada-texto");
    let titulo = document.querySelector(".titulo");
    let palavra = titulo.textContent;
    Escrever(titulo, palavra);
    function Escrever(elemento, texto){
        let listinha = []
        texto.split('').forEach(letra => {
            let letraImg = new Image();
            letraImg.src= "stefan.png";
            let pos = abc.indexOf(letra.toUpperCase());
            if(letra != ' '){
                if(pos < 27) letraImg.style = 'width: 16px; height: 24px; object-fit: none; object-position: '+pos*-16+'px 0px;';
                else if( pos < 46) letraImg.style = 'width: 16px; height: 24px; object-fit: none; object-position: '+(27 - pos)*16+'px -24px;'
            }else{
                letraImg.style = 'width: 16px; height: 24px; object-fit: none; object-position: '+19*-16+'px -24px;';
            }
            listinha.push(letraImg);
        });
        if(elemento) elemento.innerHTML = "";
        listinha.forEach(l => {
            if(!elemento) visor.appendChild(l);
            else{
                elemento.appendChild(l);
            }
        })
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        let entrada = form.querySelector("input");
        Escrever(null,entrada.value);
        entrada.value = null;
    })
}