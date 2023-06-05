const cadastrar = document.getElementById ("cadastrar");
const cards = document.querySelector(".cards")

var emaillogado;
femaillogado();



cadastrar.onclick = () => {
    window.location.assign("registro.html");
}

function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        if(elemento.email == emaillogado){
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `<div class="cardimagem"> <img src="img/${elemento.foto}"> </div> <div class="cardnome">${elemento.nome} <p>${elemento.descricao}</p></div> <div class="cardinfo">
        <i  onclick="editar(${indice})">Editar</i>
        <i  onclick="excluir(${indice})">Excluir</i>
        </div>`;

        cards.appendChild(divcard);}
        
    });
}

carregarCatalogo()

function excluir(indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.length == 1)
    {localStorage.clear("catalogo");}
    else{
    dados.splice(indice,1);
    localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function editar(indice){
    var url ="registro.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
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