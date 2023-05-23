const cadastrar = document.getElementById ("cadastrar");
const cards = document.querySelector(".cards")

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
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `<div class="cardimagem"> <img src="img/${elemento.foto}"> </div> <div class="cardnome">${elemento.nome} <p>${elemento.descricao}</p></div> <div class="cardinfo">
        <i  onclick="editar(${indice})">Editar</i>
        <i  onclick="excluir(${indice})">Excluir</i>
        </div>`;

        cards.appendChild(divcard);
        
    });
}

carregarCatalogo()