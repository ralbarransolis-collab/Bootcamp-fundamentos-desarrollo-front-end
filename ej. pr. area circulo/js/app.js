        // Solicitar el diámetro al usuario
        var diametro = Number(prompt("Ingrese el diámetro de la circunferencia"));

        // Calcular el radio
        var radio = diametro / 2;

        // Calcular el área
        var area = Math.PI * Math.pow(radio, 2);

        // Mostrar el resultado en la consola
        console.log(area);

        // Mostrar el resultado en una ventana emergente
        window.alert(
            "El valor del área para la circunferencia de diámetro " +
            diametro +
            " es igual a " +
            area.toFixed(2)
        );

        // Mostrar el resultado en la página web
        document.getElementById("resultado").innerHTML =
            "<h4>Resultado</h4>" +
            "<p>El valor del área para la circunferencia de diámetro <strong>" +
            diametro +
            "</strong> es igual a <strong>" +
            area.toFixed(2) +
            "</strong>.</p>";
