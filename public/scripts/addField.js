// Procurar  o  botao
document.querySelector("#add-time")
//Qdo clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
     //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Boolean é true ou false
    
    //limpar os campos
    const fields  = newFieldContainer.querySelectorAll("input")

  //para cada campo limpar
  fields.forEach(function(field) {
      // pegar field do momento e limpa ele 
      field.value = ''
      
  })

    //Colocar na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
} 

