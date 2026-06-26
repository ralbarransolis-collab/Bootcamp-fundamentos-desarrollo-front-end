let contarVocales = function (palabra) {

    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;

    palabra = palabra.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i])) {
            contador++;
        }
    }
    return contador;
}

function ejecutar() {

    let cantidad = Number(prompt("¿Cuántas palabras desea ingresar?"));
    let palabras = [];

    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt("Ingrese la palabra " + (i + 1));
        palabras.push(palabra);

    }
    let textoCompleto = palabras.join("");
    let totalVocales = contarVocales(textoCompleto);

    console.log("Cantidad total de vocales: " + totalVocales);

    window.alert("Cantidad total de vocales: " + totalVocales);

    document.getElementById("palabras").innerHTML =
        "<strong>Palabras ingresadas:</strong><br>" +
        palabras.join(", ");

    document.getElementById("resultado").innerHTML =
        "Cantidad total de vocales: " + totalVocales;
}