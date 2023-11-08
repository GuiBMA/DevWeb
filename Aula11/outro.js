const parameters = new URLSearchParams(window.location.search);

document.getElementById('id').innerHTML = parameters.get("id");
document.getElementById('nome').innerHTML = parameters.get("nome_completo");