function trocaTema(){
    // pega pela tag do body
    let areaBody = window.document.querySelector('body');
    // usandoa tag de antes, mudo o atributo backgroundColor
    areaBody.style.backgroundColor = 'black';
    // mudar a cor do header para branco e letras pretas
    let corFundoHeader = window.document.querySelector('header');
    corFundoHeader.style.backgroundColor = 'white';
    // mudar a cor das letras
    let TituloHeader =  window.document.querySelector('h1');
    TituloHeader.style.color = 'black';
}


// fazer função de onclick para retornar


