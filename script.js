var boton = document.getElementById("volverBtn");


window.onscroll = function() { funcionScroll() };

function funcionScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}

function volverInicio() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.getElementById("btnHamburguesas").addEventListener("click", function() {
    document.getElementById("activo").removeAttribute("id");
    document.querySelector(".hamburguesas").id = "activo";
});

document.getElementById("btnPapas").addEventListener("click", function() {
    document.getElementById("activo").removeAttribute("id");
    document.querySelector(".papas").id = "activo";
});

document.getElementById("btnPancho").addEventListener("click", function() {
    document.getElementById("activo").removeAttribute("id");
    document.querySelector(".panchos").id = "activo";
});

document.getElementById("btnSalads").addEventListener("click", function() {
    document.getElementById("activo").removeAttribute("id");
    document.querySelector(".ensaladas").id = "activo";
});

document.getElementById("btnHelado").addEventListener("click", function() {
    document.getElementById("activo").removeAttribute("id");
    document.querySelector(".helados").id = "activo";
});

document.getElementById("btnBebida").addEventListener("click", function() {
    document.getElementById("activo").removeAttribute("id");
    document.querySelector(".bebidas").id = "activo";
});