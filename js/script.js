function calcularImc() {
    let altura  = document.getElementById('altura').value;
    let peso    = document.getElementById('peso').value;
    let result  = document.getElementById('result');
    let imc     = document.getElementById('imc');

    // substituir virgula por ponto
    altura = altura.replace(',','.');
    peso   = peso.replace(',','.');

    // calcular imc
    let calculo = peso / (altura * altura);

    // arredondar valor
    calculo = calculo.toFixed(2);

    // mostrar na tela o imc do usuário
    result.innerHTML += '<div class="result" style="color: #ffffff; font-size: 32px; font-style: normal; font-weight: 500; font-family: Inter; text-align: center;"> O seu IMC é <strong>' + calculo + '</strong><br /></div>';

    // MOSTRA SE O USUÁRIO ESTÁ NO PESO IDEAL OU NÃO
    if (calculo < 18.5)
        imc.innerHTML = '<div class="result" style="color: #ffffff; font-size: 32px; font-style: normal; font-weight: 500; font-family: Inter; text-align: center;"><strong>Você está abaixo do peso.</strong></div>';
    else if (calculo >= 18.5 && calculo <= 24.9)
        imc.innerHTML = '<div class="result" style="color: #ffffff; font-size: 32px; font-style: normal; font-weight: 500; font-family: Inter; text-align: center;"><strong>Você está no peso ideal.</strong></div>';
    else if (calculo >= 25 && calculo <= 29.9)
        imc.innerHTML = '<div class="result" style="color: #ffffff; font-size: 32px; font-style: normal; font-weight: 500; font-family: Inter; text-align: center;"><strong>Você está acima do peso.</strong></div>';
    else if (calculo >= 30 && calculo <= 40)
        imc.innerHTML = '<div class="result" style="color: #ffffff; font-size: 32px; font-style: normal; font-weight: 500; font-family: Inter; text-align: center;"><strong>Você está com obesidade.</strong></div>';
    else
        imc.innerHTML = '<div class="result" style="color: #ffffff; font-size: 32px; font-style: normal; font-weight: 500; font-family: Inter; text-align: center;"><strong>Você está com obesidade mórbida.</strong></div>';
    }
   
function verificarInput(event) {
    var letra = event.key;

    if (letra != 0 && letra != 1 && letra != 2 && letra != 3 && letra != 4 && letra != 5 && letra != 6 && letra != 7 && letra != 8 && letra != 9 && letra != ',' && letra != '.' && letra != 'Tab' && letra != 'Enter' && letra != 'Backspace' && letra != 'Delete' && letra != 'ArrowLeft' && letra != 'ArrowRight') {
        alert('Caractere inválido!');
        document.getElementById('gasolina').value = ' ';
        document.getElementById('etanol').value = ' ';
    }

}