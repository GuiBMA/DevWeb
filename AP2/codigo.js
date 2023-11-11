const url = "https://botafogo-atletas.mange.li";

const body = document.body;
body.className = 'body';

const header = document.createElement('header');
header.className = 'header';

const pegar_coisas = async (caminho) => {
    document.body.innerHTML = ''
    body.prepend(header);
    header.appendChild(buttonContainer);
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const preenche = (atleta) => {
    const container = document.createElement('article');
    container.className = 'container-estilo';
    Object.assign(container.dataset, {
        id: atleta.id,
        altura: atleta.altura,
        nomeCompleto: atleta.nome_completo,
        nascimento: atleta.nascimento
    });

    const titulo = document.createElement('h3');
    titulo.id = "titulo";
    titulo.innerText = atleta.nome;

    const imagem = document.createElement('img');
    imagem.className = 'imagem';
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;

    const saibaMais = document.createElement('p');
    saibaMais.className = 'saibaMais';
    saibaMais.innerHTML = 'Saiba mais';

    container.append(titulo, imagem, saibaMais);
    container.onclick = (e) => handleClick(e, container);

    body.appendChild(container);
}

const handleClick = (e) => {
    e.stopPropagation();
    const artigo = e.target.closest('article');
    //cookie
    document.cookie = `id=${artigo.dataset.id}`;
    document.cookie = `nome_completo=${artigo.dataset.nome_completo}`;
    document.cookie = `nascimento=${artigo.dataset.nascimento}`;
    document.cookie = `altura=${artigo.dataset.altura}`;

    //localStorage
    localStorage.setItem('id', artigo.dataset.id);
    localStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    localStorage.setItem('nascimento', artigo.dataset.nascimento);
    localStorage.setItem('altura', artigo.dataset.altura);
    localStorage.setItem('dados-original', artigo.dataset);
    localStorage.setItem('dados', JSON.stringify(artigo.dataset));

    //sessionStorage
    sessionStorage.setItem('id', artigo.dataset.id);
    sessionStorage.setItem('nome_completo', artigo.dataset.nome_completo);
    sessionStorage.setItem('nascimento', artigo.dataset.nascimento);
    sessionStorage.setItem('altura', artigo.dataset.altura);
    sessionStorage.setItem('dados-original', artigo.dataset);
    sessionStorage.setItem('dados', JSON.stringify(artigo.dataset));

    console.log(acha_cookie('nome_completo'));
    console.log(localStorage.getItem('id'));
    console.log(JSON.parse(localStorage.getItem('dados')).altura);

    document.location = `/outra.html?id=${artigo.dataset.id}`;
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split("=")[1];
}

const buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';

// Botão Homens
const botaoHomens = document.createElement('button');
botaoHomens.className = 'botaoHomens';
botaoHomens.innerText = 'Homens';
botaoHomens.classList.add('filter-btn');

botaoHomens.onmouseover = () => botaoHomens.style.backgroundColor = '#333';
botaoHomens.onmouseout = () => botaoHomens.style.backgroundColor = 'black';
botaoHomens.onclick = () => {
    pegar_coisas(`${url}/masculino`).then((entrada) => {
        for (const atleta of entrada) {
            preenche(atleta);
        }
    });
};
buttonContainer.appendChild(botaoHomens);

// Botão Mulheres
const botaoMulheres = document.createElement('button');
botaoMulheres.className = 'botaoMulheres';
botaoMulheres.innerText = 'Mulheres';
botaoMulheres.classList.add('filter-btn');

botaoMulheres.onmouseover = () => botaoMulheres.style.backgroundColor = '#333';
botaoMulheres.onmouseout = () => botaoMulheres.style.backgroundColor = 'black';
botaoMulheres.onclick = () => {
    pegar_coisas(`${url}/feminino`).then((entrada) => {
        for (atleta of entrada){preenche(atleta)
        };
    })
};
buttonContainer.appendChild(botaoMulheres);

// Botão Todos
const botaoTodos = document.createElement('button');
botaoTodos.className = 'botaoTodos';
botaoTodos.innerText = 'Todos';
botaoTodos.classList.add('filter-btn');

botaoTodos.onmouseover = () => botaoTodos.style.backgroundColor = '#333';
botaoTodos.onmouseout = () => botaoTodos.style.backgroundColor = 'black';
botaoTodos.onclick = () => {
    pegar_coisas(`${url}/all`).then((entrada) => {
        for (atleta of entrada){preenche(atleta)
        }
    })
};
buttonContainer.appendChild(botaoTodos);

// Botão Sair
const botaoSair = document.createElement('button');
botaoSair.className = 'botaoSair';
botaoSair.innerText = 'Sair';
botaoSair.classList.add('filter-btn');

botaoSair.onmouseover = () => botaoSair.style.backgroundColor = '#333';
botaoSair.onmouseout = () => botaoSair.style.backgroundColor = 'red';
botaoSair.onclick = () => {
    window.history.back()
};
buttonContainer.appendChild(botaoSair);

header.appendChild(buttonContainer);

body.prepend(header);

// pegar_coisas(`${url}/all`).then(
//     (entrada) => {
//         for (atleta of entrada)
//         {preenche(atleta)}
//     }
// );
