// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
}

// Desafio 2
function calcArea(a, b) {
  // seu código aqui
  return (a * b) / 2;
}

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
  let matriz = [];
  matriz = texto.split(' ');
  return matriz;
}

// Desafio 4
function concatName(string) {
  // seu código aqui

  let ultimo = 0;
  let primeiro = 0;
  let tamanho = 0;
  let novaString = 0;
  tamanho = string.length;
  ultimo = string[tamanho - 1];
  primeiro = string[0];
  novaString = ultimo + ', ' + primeiro;
  return (novaString);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(entrada) {
  // seu código aqui
  let qtd = 0;
  let maior = Math.max(...entrada);
  for (let i = 0; i < entrada.length; i += 1) {
    if (maior === entrada[i]) {
      qtd += 1;
    }
  }
  return qtd;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);
  if (cat1 < cat2) {
    return ('cat1');
  } else if (cat2 < cat1) {
    return ('cat2');
  } else {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let resultado = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  // seu código aqui
  let resultado = [];
  let arr = frase.split('');
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
    case 'a':
      resultado.push(1);
      break;
    case 'e':
      resultado.push(2);
      break;
    case 'i':
      resultado.push(3);
      break;
    case 'o':
      resultado.push(4);
      break;
    case 'u':
      resultado.push(5);
      break;
    default:
      resultado.push(arr[i]);
    }
  }
  return resultado = resultado.join('');
}

function decode(frase) {
  // seu código aqui
  let resultado = [];
  let arr = frase.split('');
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
    case '1':
      resultado.push('a');
      break;
    case '2':
      resultado.push('e');
      break;
    case '3':
      resultado.push('i');
      break;
    case '4':
      resultado.push('o');
      break;
    case '5':
      resultado.push('u');
      break;
    default:
      resultado.push(arr[i]);
    }
  }
  return resultado = resultado.join('');
}

// Desafio 10
function techList(tec, pessoa) {
  // seu código aqui
  let matriz = [];
  let resultado = {
    tech: '',
    name: '',
  };
  if (tec.length === 0 || pessoa === '') {
    return 'Vazio!';
  } else {
    tec.sort();
    for (let i = 0; i < tec.length; i += 1) {
      resultado = {
        tech: tec[i],
        name: pessoa,
      };
      matriz.push(resultado);
    }
  }
  return matriz;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
