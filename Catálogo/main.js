let categorias = document.querySelectorAll(".categorias");

categorias.forEach(categoria => {
    categoria.addEventListener("mouseover", function() {
        let subLista = this.querySelector(".sub-lista");
        subLista.style.display = "block";
    });

    categoria.addEventListener("mouseout", function() {
        let subLista = this.querySelector(".sub-lista");
        subLista.style.display = "none";
    });
});
