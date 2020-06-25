const usuarios = [];

function cadUsuario(){
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const usuario = {id: Date.now(),nome, endereco, telefone, email, senha, status: 'Ativo'};

  let usuarioGravado = JSON.parse(window.localStorage.getItem("usuarios"));
  if(usuarioGravado == null){ // primeiro acesso chave ainda não foi criada
    window.localStorage.setItem('usuarios',JSON.stringify([])); // criar
    usuarioGravado = JSON.parse(window.localStorage.getItem("usuarios"));// atualizar a minha variavel
    // validar se o email ja´ existe
    let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.email === email);
    if(usuarioIndex !== -1){ // já existe um email gravado na memoria
      Swal.fire({
    
        icon: 'warning',
        title: 'Email já está cadastrado no sistema!',
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      usuarioGravado.push(usuario); // adiciona um novo usuario
      window.localStorage.setItem('usuarios', JSON.stringify(usuarioGravado)); // gravar na memoria o objeto atualizado
    }
    
  }else{ // chave usuario já existe na memória
    let usuarioIndex = usuarioGravado.findIndex(usuario => usuario.email === email);
    if(usuarioIndex !== -1){ // já existe um email gravado na memoria
      Swal.fire({
    
        icon: 'warning',
        title: 'Email já está cadastrado no sistema!',
        showConfirmButton: false,
        timer: 1500
      });
    }
    else{
      usuarioGravado.push(usuario); // adiciono um novo usuario
      window.localStorage.setItem('usuarios',JSON.stringify(usuarioGravado)); // gravar na memoria
    }  
    
  }

}

function logar(){
  debugger
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // recuperar o valor do localstorage
  let usuariosGravados = JSON.parse(window.localStorage.getItem("usuarios"));
  //console.log(usuariosGravados);
  let usuarioIndex = usuariosGravados.findIndex(usuario => usuario.email === email);
  if(usuarioIndex === -1){ // não tem email cadastrado
    Swal.fire({
    
      icon: 'warning',
      title: 'Email não cadastrado!',
      showConfirmButton: false,
      timer: 1500
    })
  }else{ // o email é valido e agora vou testar a senha
        if(usuariosGravados[usuarioIndex].senha !== senha){ // senha incorreta
          Swal.fire({
    
            icon: 'warning',
            title: 'Senha incorreta!',
            showConfirmButton: false,
            timer: 1500
          })
        }else{ // email e senha validados corretos
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: `Bem vindo, ${usuariosGravados[usuarioIndex].nome} !`
          })
          window.location.href = 'splash.html';
        }
  }
  
}

function abrir() {
  // confere se o hamburguer esta aberto ou não
  
  // variavel que pega o div links
var x = document.getElementById("Links");
// checa nas chaves do div links. dentro de div#links tem style e dentro tem display
// se o display estiver bloqueado(o hamburguer ativado) ele coloca none pra tirar
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}

}

function info(){
  var nome = localStorage.getItem(usuarios[nome]);
  a = document.getElementById("nome").value;
  a = nome;

  // let usuariosGravados = JSON.parse(window.localStorage.getItem("usuarios"));
  // let usuarioIndex = usuariosGravados.findIndex(usuario => usuario.nome === nome);
  // console.log(usuarios[nome]);
}