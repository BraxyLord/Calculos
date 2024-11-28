function logar() {
            
    var login = document.getElementById('user').value;
    var senha = document.getElementById('senha-login').value;

   
    if (login === "admin" && senha === "admin") {
        alert('Usuário Logado');
        location.href="calculadora.html";
    } else {
        alert('Você está tentando hackear, seu safado!');
    }
}
