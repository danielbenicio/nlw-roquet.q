import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach( button => {
  //adicionar a escuta
  button.addEventListener("click", handleClick)
})

//obs: quando for apenas 1 botão é apenas querySelector, quando for mais de um é querySelectorAll

//Quando o botão delete for clicado ele abre a modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach( button =>{
  button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
  //as tag a não adicionaram mais jogo da velha na url
  event.preventDefault()
  
  //"?" = se for true/ ":" se não for true
  const text = check ? "Marcar como lido" : "Excluir"

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?` 
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

  //abrir modal
  modal.open()
}

