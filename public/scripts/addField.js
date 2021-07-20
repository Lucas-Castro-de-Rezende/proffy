// Procurar o botao
document.querySelector('#add-time')

// Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    console.log("Cheguei aqui")
    
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // Pegar limpar os campos
    const field = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    field.forEach(function (field) {
        //pegar o field do momento
        field.value = ""
    })

    // Colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}