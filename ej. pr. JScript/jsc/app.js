    const botonArriba = document.getElementById("btnArriba");

    botonArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });