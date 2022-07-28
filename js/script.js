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
    result.innerHTML += calculo.replace('.',',') + '<div class="result" style="color: #ffffff; font-size: 36px; font-style: normal; font-weight: 500; font-family: 'Inter';"> O seu IMC é <strong>' + calculo + '</strong><br /></div>';

    // MOSTRA SE O USUÁRIO ESTÁ NO PESO IDEAL OU NÃO
    if (calculo < 18.5)
        imc.innerHTML = 'Você está abaixo do peso.';
    else if (calculo >= 18.5 && calculo <= 24.9)
        imc.innerHTML = 'Você está no peso ideal.';
    else if (calculo >= 25 && calculo <= 29.9)
        imc.innerHTML = 'Você está acima do peso.';
    else if (calculo >= 30 && calculo <= 40)
        imc.innerHTML = 'Você está com obesidade.';
    else
        imc.innerHTML = 'Você está com obesidade mórbida.';

}