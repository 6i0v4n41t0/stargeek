const mensagem = document.querySelector(".mensagem");
const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const confirmarsenha = document.getElementById("confirmar senha");


formulario.onsubmit = (evento) =>{
   if (nome.value == ""){
    evento.preventDefault();
    mensagem.innerHTML = "<p> Digite seu nome </p>";
    nome.focus();
    return null;
   }

   if (email.value == ""){
    evento.preventDefault();
    mensagem.innerHTML = "<p> Digite seu email </p>";
    email.focus();
    return null;
   }

if (senha.value == ""){
    evento.preventDefault();
    mensagem.innerHTML = "<p> Digite sua senha </p>";
    senha.focus();
    return null;
}

let dados = JSON.parse(localStorage.getItem("dados")) || [];
dados.push({
  nome: nome.value,
  email: email.value,
  senha: senha.value
})

localStorage.setItem("dados", JSON.stringify(dados));
evento.preventDefault();
mensagem.innerHTML="<p> Parabens Cadastro feito com sucesso</p>";

setTimeout(()=>{
    window.location.assign("login.html");
}, 3000);

}

function femaillogado(){
  let dados = JSON.parse(sessionStorage.getItem("logado"));
  if (dados == null){
     window.location.assign("login.html");
  }
  else{
     emaillogado = dados[0].email;
  }
}