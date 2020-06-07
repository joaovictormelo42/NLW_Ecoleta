const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

//adicionando evento para verificar clique ao abrir botão para mostrar modal.
buttonSearch.addEventListener("click", () => {
    modal.classList.toggle("hide") //mantive o toggle, por achar mais prático, mas existem outros dois comandos, um para remover e outro para incluir. 
})

//adicionando evento para verificar clique ao fechar.
close.addEventListener("click", () => {
    modal.classList.toggle("hide")
})