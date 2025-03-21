var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("click", function(event){
    if (event.target.classList.contains("fa-trash-alt")){
       
        event.target.parentNode.parentNode.parentNode.classList.add("fadeOut");

        setTimeout(() => {
            event.target.parentNode.parentNode.parentNode.remove();
        }, 1000);
    }
})