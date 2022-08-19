function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('#input', handleButtonClick);
  inputHeight.addEventListener('#input', handleButtonClick);

  handleButtonClick();
}

function handleButtonClick() {
  console.log('cliquei');
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  var imc = calculateImc(weight, height);

  var formattedImc = imc.toFixed(2).replace('.', ',');

  var imcResult = document.querySelector('#imc-result');
  var imcResult2 = document.querySelector('#imc-result2');

  if (imc < 16) {
    obesidadeGrau = 'inválido';
  } else if (imc >= 16 && imc < 17) {
    obesidadeGrau = 'Muito abaixo do peso';
  } else if (imc >= 17 && imc < 18.5) {
    obesidadeGrau = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    obesidadeGrau = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    obesidadeGrau = 'Acima do peso';
  } else if (imc >= 30 && imc < 35) {
    obesidadeGrau = 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 40) {
    obesidadeGrau = 'Obesidade grau II';
  } else if (imc > 40) {
    obesidadeGrau = 'Obesidade grau III';
  }

  imcResult.textContent = formattedImc;
  imcResult2.textContent = obesidadeGrau;
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

start();
