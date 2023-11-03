const url = "https://botafogo-atletas.mange.li";

const promessa = fetch(url);
console.log(promessa);

// promessa.then(
//     (resposta) => resposta.text().then(
//         (r) => console.log(r)
//         )
// );

console.log('assincrono');

// const pegar_coisas = async (caminho) => {
//     const resposta = await fetch(caminho);
//     const dados = await resposta.text();
//     return dados;
// }

// pegar_coisas(`${url}/all`).then(
//     (r) => console.log(r)
// );

const pega_coisa_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pega_coisa_json(`${url}/all`).then(
    (r) => console.log(r)
);


const numero_jogador = 42;

pega_coisa_json(`${url}/${numero_jogador}`).then(
    (r) => console.log(r)
);

const cria_cartao = (entrada) => { 

    const container_atleta = document.createElement('div');

    container_atleta.style.width = '20rem';
    container_atleta.style.backgroundColor = 'grey';
    container_atleta.style.textAlign = 'center';
    container_atleta.style.margin = 'auto';

    const titulo = document.createElement('h3');

    titulo.innerHTML = entrada.nome;

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `foto de ${entrada.nome}`;

    const descricao = document.createElement('p');
    descricao.innerHTML = entrada.descricao;

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    document.body.appendChild(container_atleta);
}

var num = prompt("Digite número do ID do jogador:");
pega_coisa_json(`${url}/${num}`).then((r) => cria_cartao(r));