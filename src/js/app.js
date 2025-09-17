let amigosParaSortear = [];

function adicionarAmigo() {
    
    let inputNome = document.getElementById("amigo");

    let nomezinhoAmigo

    if (inputNome) {
        
        nomezinhoAmigo = inputNome.value;
        
    }

    if (nomezinhoAmigo == "") {
        
        inputNome.value = ""

    }


    else {

        amigosParaSortear.push(nomezinhoAmigo);
        inputNome.value = "";  
            
    }

    return
}

function atualizarLista() {
    
    let listinhaAmigos = document.getElementById("listaAmigos")

    // Troca o conteúdo da lista por um texto vazio
    listinhaAmigos.innerHTML = "";

    for (let i = 0; i < amigosParaSortear.length; i++){

        let amigoParaAdicionar = document.createElement("li");
        amigoParaAdicionar.textContent = amigosParaSortear[i];
        listinhaAmigos.appendChild(amigoParaAdicionar);
    }

    return

}


function sortearAmigo() {
    
    let tamanhoLista = amigosParaSortear.length;

    if (tamanhoLista == 0) {

        return
    }

    else {
    
        let resultado = Math.floor(Math.random() * tamanhoLista);

        const resultadoLista = document.createElement("li");

        resultadoLista.innerText = "O sorteado foi " + amigosParaSortear[resultado];

        referencial = document.getElementById("resultado");

        referencial.innerHTML = "";

        referencial.appendChild(resultadoLista);

        return
    }
    
}
