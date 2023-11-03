const ingrid = atletas[0];


window.onload = () => {
const espaco_nome = document.getElementById('nome');
const espaco_imagem = document.querySelector('div#container > img');
const espaco_descricao = document.querySelector('div#container > p');

espaco_nome.innerText = ingrid.nome;
espaco_imagem.src = ingrid.imagem;
espaco_descricao.innerHTML = ingrid.descricao;
}

const preenche = (atleta) => {
    espaco_nome.innerText = atleta.nome;
    espaco_imagem.src = atleta.imagem;
    espaco_descricao.innerHTML = atleta.descricao;
}

preenche(atletas[1]);


// let indice = 0;
// while (indice < atletas.length) {
//     preenche(atletas[indice])
//     console.log(indice, atletas[indice].nome)
//     indice++
// }

for (indice = 0; indice < atletas.length ; indice++) {
    preenche(atletas[indice]);
    console.log(indice, "loop for");
}

for (indice = atletas.length; indice >= 0 ; indice--) {
    preenche(atletas[indice]);
    console.log(indice, "Contagem regressiva"); 
}