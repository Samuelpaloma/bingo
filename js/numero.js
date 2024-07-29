let bingo = [];
let iteracion1;
let iteracion2;
let acumulador = 0;
let resultado = "";
let resultadoB = "";
let resultadoI = "";
let resultadoN = "";
let resultadoG = "";
let resultadoO = "";
let resultadoX = "";
let resultadoXXX = "";
let numero = "";

for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    let interno = [];
    for (iteracion2 = 0; iteracion2<5; iteracion2++){
        acumulador = acumulador + 1;
        interno[iteracion2] = acumulador * 2;
    }   
    bingo[iteracion1] = interno;
}
for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    resultado += '<div class="row">';
    for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
        resultado += '<div class="col color_1">' + bingo[iteracion1][iteracion2] + '</div>';
    }
    resultado += '</div>';
}
document.getElementById('resultado').innerHTML = resultado;
// Letra B sola
for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    resultadoB += '<div class="row">';
    resultadoB += '<div class="col color_1">' + bingo[iteracion1][0] + '</div>';
    resultadoB += '</div>';  
}

document.getElementById('resultado-B').innerHTML = resultadoB;


// Letra I sola
for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    resultadoI += '<div class="row">';
    resultadoI += '<div class="col color_1">' + bingo[iteracion1][1] + '</div>';
    resultadoI += '</div>';  
}

document.getElementById('resultado-I').innerHTML = resultadoI;


// Letra N sola
for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    resultadoN += '<div class="row">';
    resultadoN += '<div class="col color_1">' + bingo[iteracion1][2] + '</div>';
    resultadoN += '</div>';  
}

document.getElementById('resultado-N').innerHTML = resultadoN;
// Letra G sola
for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    resultadoG += '<div class="row">';
    resultadoG += '<div class="col color_1">' + bingo[iteracion1][3] + '</div>';
    resultadoG += '</div>';  
}

document.getElementById('resultado-G').innerHTML = resultadoG;
// Letra O sola
for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    resultadoO += '<div class="row">';
    resultadoO += '<div class="col color_1">' + bingo[iteracion1][4] + '</div>';
    resultadoO += '</div>';  
}

document.getElementById('resultado-O').innerHTML = resultadoO;


for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    resultadoX += '<div class="row">';
    for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
        numero = bingo[iteracion1][iteracion2];
        if (iteracion1 === iteracion2 || iteracion1 + iteracion2 === bingo.length - 1){
            resultadoX += '<div class="col color">' + numero + '</div>';
        } else{ 
        resultadoX += '<div class="col color_1">' + numero + '</div>';
    }
}
    resultadoX += '</div>';
}
document.getElementById('resultado-X').innerHTML = resultadoX;

// Números que forman las tres "X"
const x1 = [2, 6, 14, 22, 26];
const x2 = [22, 26, 34, 42, 46];
const x3 = [6, 10, 18, 26, 30];

// Mostrar los números que forman las tres "X"
for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    resultadoXXX += '<div class="row">';
    for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
        numero = bingo[iteracion1][iteracion2];
        if (x1.includes(numero) || x2.includes(numero) || x3.includes(numero)) {
            resultadoXXX += '<div class="col color">' + numero + '</div>';
        } else {
            resultadoXXX += '<div class="col color_1">' + numero + '</div>';
        }
    }
    resultadoXXX += '</div>';
}
document.getElementById('resultado-XXX').innerHTML = resultadoXXX;