const msg = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) => {
    let dados = JSON.parse(localStorage.getItem("dados"));

    if (dados != null) {

    dados.forEach((elemento) => {
        if (elemento.email == email.value && elemento.senha == senha.value) {
            msg.innerHTML = "Aguarde redirecionando..."
            evento.preventDefault();
            let dados = JSON.parse(sessionStorage.getItem("logado")) || [];
            dados.push(
                {
                    email : email.value
                }
            )
            sessionStorage.setItem("logado", JSON.stringify(dados) );
            setTimeout(()=>{window.location.assign("catalogo.html")}, 2000)
        }
    })

} else {
    evento.preventDefault();
    msg.innerHTML = "Nenhum Usuário Cadastrado."
}
}