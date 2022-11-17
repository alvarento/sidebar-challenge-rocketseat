//PEGANDO OS ELEMENTOS DO DOCUMENTO HTML
const sidebar = document.querySelector(".sidebar"),
      menu = document.querySelector("#btn-menu"),
      input= document.querySelector(".search input");

     
//EVENTO DE CLICK PARA ABRIR OU FECHAR O SIDEBAR
menu.addEventListener("click", () => {
    sidebar.classList.toggle("close");

    if (sidebar.classList.contains("close")) {
        input.removeAttribute("placeholder");
    } else {
        input.setAttribute("placeholder", "Buscar");
    }

})

//EVENTO DE CLICK PARA A AREA DE BUSCA, MESMO COM A SIDEBAR FECHADA
input.addEventListener("click", () => {
    sidebar.classList.remove("close")
})

