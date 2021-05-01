let novousuario = ""
let novoemail = ""
let novasenha = ""














let secadastrar = document.getElementById("se_cadastrar")

secadastrar.addEventListener("click", function () {

    let paginacadastro = document.getElementById("pagina_cadastro")
    paginacadastro.style.display = "block"


    let paginalogin = document.getElementById("pagina_login")

    paginalogin.style.display = "none"


})
let btLogin = document.getElementById("btLogin")

btLogin.addEventListener("click", function () {

    let paginalogin = document.getElementById("pagina_login")
    paginalogin.style.display = "block"


    let paginacadastro = document.getElementById("pagina_cadastro")

    paginacadastro.style.display = "none"

})



let Cadastro = document.getElementById("Cadastro")

Cadastro.addEventListener("click", function () {

    let email = document.getElementById("email_cad").value

    let usuario = document.getElementById("usr_cad").value

    let senha = document.getElementById("pwd_cad").value


    if (email === "") {
        return alert("VOCÊ PRESISA DIGITAR UM E-MAIL")
    } else if (usuario === "") {
        return alert("VOCÊ PRESISA DIGITAR UM USUARIO ")
    } else if (senha === "") {
        return alert("VOCÊ PRESISA DIGITAR UMA SENHA ")
    } else {
        novoemail = email
        novousuario = usuario
        novasenha = senha
        alert(novousuario + " você acabou de se cadastrar")
    }


})

let logar = document.getElementById("logar")

logar.addEventListener("click", function () {

    let emaillog = document.getElementById("email_log").value
    let senhalog = document.getElementById("pwd_log").value

    if (emaillog === novoemail && senhalog === novasenha) {
        return alert(novousuario + " você esta logado")
    } else {
return alert("E-mail ou Senha incorreta")
    }
    
})



















