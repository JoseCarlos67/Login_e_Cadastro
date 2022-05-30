let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")

let tel = document.querySelector("#tel")
let labelTel = document.querySelector("#labelTel")

let cpf = document.querySelector("#cpf")
let labelCpf = document.querySelector("#labelCpf")

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")

let confirmSenha = document.querySelector("#confirmSenha")
let labelConfirmSenha = document.querySelector("#labelConfirmSenha")

nome.addEventListener("keyup", ()=>{
    if (nome.value.length<=2) {
        labelNome.setAttribute("style", "color:red")
        labelNome.innerHTML = ("<strong>Nome inavalido</strong>")
    } else {
        labelNome.setAttribute("style", "color: green")
        labelNome.innerHTML = "None"
    }
})

function cadastrar() {
    
}