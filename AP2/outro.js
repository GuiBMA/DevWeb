const url = "https://botafogo-atletas.mange.li";

const body = document.body;
body.className = 'body';

const container_saiba_mais = document.createElement('div');
container_saiba_mais.className = 'container-cartao-saiba-mais';

const nome_saiba_mais = document.createElement('h3');
nome_saiba_mais.id = "nome-saiba-mais";

const imagem_saiba_mais = document.createElement('img');
imagem_saiba_mais.id = 'imagem-saiba-mais';

const descricao_saiba_mais = document.createElement('p');
descricao_saiba_mais.id = 'descricao-saiba-mais';

const altura_saiba_mais = document.createElement('p');
altura_saiba_mais.id = 'altura-saiba-mais';

const nascimento_saiba_mais = document.createElement('p');
nascimento_saiba_mais.id = 'nascimento-saiba-mais';

const posicao_saiba_mais = document.createElement('p');
posicao_saiba_mais.id = 'posicao-saiba-mais';

const botaoSair = document.createElement('button');
botaoSair.className = 'botaoSair';
botaoSair.innerText = 'Sair';

botaoSair.onmouseover = () => botaoSair.style.backgroundColor = '#333';
botaoSair.onmouseout = () => botaoSair.style.backgroundColor = 'red';
botaoSair.onclick = () => {
    window.history.back()
};

container_saiba_mais.append(nome_saiba_mais, imagem_saiba_mais, descricao_saiba_mais, altura_saiba_mais, nascimento_saiba_mais, posicao_saiba_mais, botaoSair);
body.appendChild(container_saiba_mais);

const nome = document.getElementById('nome-saiba-mais');
const descricao = document.getElementById('descricao-saiba-mais');
const altura = document.getElementById('altura-saiba-mais');
const nascimento = document.getElementById('nascimento-saiba-mais');
const imagem = document.getElementById('imagem-saiba-mais');
const posicao = document.getElementById('posicao-saiba-mais');

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const pegaDados = async () => {
    const parametros = new URLSearchParams(window.location.search);
    const urlAPI = url + '/' + parametros.get('id');
    const atleta = await pegar_coisas(urlAPI);

    nome.innerHTML = atleta.nome;
    descricao.innerHTML = atleta.descricao;
    altura.innerHTML = "Altura: " + atleta.altura;
    nascimento.innerHTML = "Data de Nascimento: " + atleta.nascimento;
    posicao.innerHTML = "Posição: " + atleta.posicao;
    imagem.src = atleta.imagem;
};

pegaDados();