function validar() {

    /* --------- Variaveis --------- */

    const email = document.getElementById('email')
    const mensagem = document.getElementById('msg');
    const validation = document.getElementById('validation');

    /* --------- Condicionais --------- */

    if(email.value == "") {
        validation.style.color = "#ff5252"
        validation.innerHTML = "E-mail ou mensagem não foram inseridos!"
    }
    if(mensagem.value == "") {
        validation.style.color = "#ff5252"
        validation.innerHTML = "E-mail ou mensagem não foram inseridos!"
    }

    else {
        validation.style.color = "#00ff00"
        validation.innerHTML = "Enviado!"
    }


}