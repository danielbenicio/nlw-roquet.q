import Modal from './modal.js'

const modal = Modal()

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
  //adicionar a escuta
  button.addEventListener("click", event => {
    //abrir modal
    modal.open()
  })
})

//obs: quando for apenas 1 botão é apenas querySelector, quando for mais de um é querySelectorAll

//Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach( button =>{
  button.addEventListener("click", event =>{
    modal.open()
  })
})

