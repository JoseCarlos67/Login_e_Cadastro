const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const cpf = document.getElementById('cpf')
const senha = document.getElementById('senha')
const confirmSenha = document.getElementById('confirmSenha')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telValue = tel.value.trim()
    const cpfValue = cpf.value.trim()
    const senhaValue = senha.value.trim()
    const confirmSenhaValue = confirmSenha.value.trim()

    if (nomeValue === ''){
        errorValidation(nome, 'Preencha esse campo!')
   } else {
        successValidation(nome)
   }

    if (emailValue ==='') {
        errorValidation(email, 'Preencha esse campo!')
    } else {
        successValidation(email)
    }

    if (telValue === '') {
        errorValidation(tel, 'Preencha esse campo!')
    } else {
        successValidation(tel)
    }

    if (cpfValue === '') {
        errorValidation(cpf, 'Preencha esse campo!')
    } else {
        successValidation(cpf)
    }
    
    if (senhaValue === '') {
        errorValidation(senha, 'Preencha esse campo senha!')
    } else if (senhaValue.length < 8){
        errorValidation(senha, 'A senha deve ter mais de 8 caracteres!')
    } else {
        successValidation(senha)
    }

    if (confirmSenhaValue === '') {
        errorValidation(confirmSenha, 'Preencha esse campo!')
    } else if (senhaValue != confirmSenha){
        errorValidation(confirmSenha, 'As senhas não conferem')
    } else {
        successValidation(confirmSenha)
    }

}
//Validação
function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('samll')
    small.innerText = message

    formControl.className = 'form-control error'
}
function successValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}