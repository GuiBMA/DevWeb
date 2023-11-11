function verificarSenha() {
    var senhaCorreta = md5('4321')
    const senhaUsuario = document.getElementById('senha').value;
    var senhaDigitada = md5(senhaUsuario)

    if (senhaDigitada !== senhaCorreta) {
        alert('Senha incorreta!'); 
    } else {
        document.location.href = "/pagina.html";
    }
}