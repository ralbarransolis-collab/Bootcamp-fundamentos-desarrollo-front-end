function yaUsado(numero, lista) {
    return lista.includes(numero);
}

function jugar() {
    const secreto = Math.floor(Math.random() * 10) + 1;

    let usados = [];
    let intentos = 3;
    let acerto = false;

    console.log("Número secreto:", secreto);

    while (intentos > 0 && acerto === false) {

        let numero = parseInt(prompt("Adivina el número secreto entre 1 y 10"));

        if (isNaN(numero) || numero < 1 || numero > 10) {
            alert("Número inválido. Debes ingresar un número entre 1 y 10.");
            continue;
        }

        if (yaUsado(numero, usados)) {
            alert("Ese número ya lo ingresaste. Intenta con otro.");
            continue;
        }

        usados.push(numero);

        document.getElementById("historial").innerHTML =
            `Intentos usados: ${usados.join(", ")}`;

        if (numero === secreto) {
            alert("¡Adivinaste!");
            acerto = true;
        } else {
            intentos--;

            if (intentos > 0) {
                alert(`No acertaste. Te quedan ${intentos} intento(s).`);
            } else {
                alert(`Sin aciertos. El número era: ${secreto}`);
            }
        }
    }
}