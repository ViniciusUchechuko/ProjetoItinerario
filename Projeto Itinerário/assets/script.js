document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

document.getElementById("imc-form").addEventListener("submit", function (event) {
    event.preventDefault();  // Previne o envio do formulário (evita recarregar a página)

    // Obtendo os valores dos campos
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("result").innerHTML = "<p>Por favor, insira valores válidos para peso e altura.</p>";
        document.getElementById("result").style.color = "black";  // Remover qualquer cor anterior
        return;
    }

    // Função para calcular o IMC
    function calcularIMC(peso, altura) {
        return peso / (altura * altura);
    }

    // Calcular o IMC
    let imc = calcularIMC(peso, altura);
    let categoria;
    let corTexto;

    // Classificação do IMC e definição da cor do texto
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
        corTexto = "#FFCC00";  // Cor amarela
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Peso normal";
        corTexto = "#4CAF50";  // Cor verde
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
        corTexto = "#FF9800";  // Cor laranja
    } else {
        categoria = "Obesidade";
        corTexto = "#F44336";  // Cor vermelha
    }

    // Exibir o resultado com a cor do texto apropriada
    document.getElementById("result").innerHTML = `<p>Seu IMC é: ${imc.toFixed(2)}</p><p>Categoria: ${categoria}</p>`;
    document.getElementById("result").style.color = corTexto;  // Define a cor do texto com base na categoria
});