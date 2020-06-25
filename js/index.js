const compra = [];
const dinheiro= [];

function importar(){

    
    const nome = document.getElementById("name").value;
    const preco = document.getElementById("desc").value;
    const tipo = document.getElementById("tipo").value;
    const categoria = document.getElementById("cat").value;

    const compra = {id: Date.now(),nome, preco, tipo, categoria};
  
    let compragravado = JSON.parse(window.localStorage.getItem("compra"));
      window.localStorage.setItem('compra',JSON.stringify([])); // criar
      compragravado = JSON.parse(window.localStorage.getItem("compra"));// atualizar a minha variavel
    
        compragravado.push(compra); // adiciona um novo usuario
        window.localStorage.setItem('compra', JSON.stringify(compragravado)); // gravar na memoria o objeto atualizado
        console.log(compra);
        console.log(compragravado); 

        divida1 = compra[1];

        listar();

    //   atualizar();
    
}

function atualizar(){
    const produto = document.getElementById("produtos").value;
    produto++;

    const saldo = recebido - divida1; 
}

function recebido(){
   debugger
    const nome = document.getElementById("name1").value;
    const preco = document.getElementById("desc1").value;
    const tipo = document.getElementById("tipo1").value;
    const categoria = document.getElementById("cat1").value;

    const dinheiro = {id: Date.now(),nome, preco, tipo, categoria};
  
    window.localStorage.setItem('recebido',JSON.stringify([])); // criar
    let dinheirogravar = JSON.parse(window.localStorage.getItem("dinheiro"));
      dinheirogravar = JSON.parse(window.localStorage.getItem("dinheiro"));// atualizar a minha variavel
    
      dinheirogravar.push(dinheiro); // adiciona um novo usuario
        window.localStorage.setItem('dinheiro', JSON.stringify(dinheirogravar)); // gravar na memoria o objeto atualizado
        console.log(dinheiro);
        console.log(dinheirogravar); 

       let positivo = dinheiro[1];
       console.log(positivo);
    //   atualizar();

}

function listar()
{
    debugger
    let linha = "";
  compra.forEach(compra => {
    row = document.getElementById("tbody");
     linha += "<tr>"+
              "<td id='tdid'>"+compra.id +"</td>"+
              "<td id='tdnome'>"+compra.nome +"</td>"+
              "<td id='tdendereco'>"+compra.endereco+"</td>"+
              "<td id='tdtelefone'>"+compra.telefone+"</td>"+
              "<td id='tdemail'>"+compra.email+"</td>"+
              "<td id='tdcidade'>"+compra.cidade+"</td>"+
              "<td id='tdacoes'><button class='icon-pencil verd btn btn-outline-success' onclick='editarUsuario("+usuario.id+")'><i class='fa fa-edit'></i></button>"+
              "<button class='icon-trash ver btn btn-outline-danger'onclick='apagarUsuario("+usuario.id+")'><i class='fa fa-trash'></i></button></td>"
            +"</tr>";
    row.innerHTML = linha; 
  });
}

