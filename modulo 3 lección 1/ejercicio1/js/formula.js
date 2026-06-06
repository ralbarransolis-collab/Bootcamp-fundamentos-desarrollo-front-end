
        function mostrar() {
            const num1 = Number(document.getElementById("numero1").value);
            const num2 = Number(document.getElementById("numero2").value);
            const num3 = Number(document.getElementById("numero3").value);

            const resultado = (num1 + num2 + num3)/3;
            document.getElementById("resultado").textContent = resultado;
                }
