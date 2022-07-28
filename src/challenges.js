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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
