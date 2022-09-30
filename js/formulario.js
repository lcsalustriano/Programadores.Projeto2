function validateFelds(){
    const emailValid = isEmailValid()
    document.getElementById('recover-enviar-button').disabled = !emailValid;

    const enviarValid = isEnviarValid();
    document.getElementById('recover-enviar-button').disabled = !emailValid; 
    
}

function validateFelds(){
    const email = document.getElementById("email").volue;
    if (!email) {
        return false;
    }

    return valideEmail(email);
}
function isEnviarValid(){
    const enviar = document.getElementById("enviar").volue;
    if (!enviar) {
        return false;
    }
    return true;
}
function validateFelds(email) {
    return /\S+@\S+\,\S+/.test(email)
}