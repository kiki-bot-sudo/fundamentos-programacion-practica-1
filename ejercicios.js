// FUNDAMENTOS DE PROGRAMACIÓN - PRÁCTICA
// Nombre del estudiante: Enrique
// Fecha: 2025

// ============================================
// SECCIÓN 1: VARIABLES Y TIPOS DE DATOS (10 puntos)
// ============================================

function miInformacion() {
  const nombre = "Enrique";
  const edad = 17;
  const carrera = "TSW";
  
  return { nombre, edad, carrera };
}

function operacionesBasicas(a, b) {
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = b !== 0 ? a / b : 0;
  
  return { suma, resta, multiplicacion, division };
}

function areaRectangulo(base, altura) {
  return base * altura;
}

function celsiusAFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

// ============================================
// SECCIÓN 2: CONDICIONALES (15 puntos)
// ============================================

function parOImpar(numero) {
  return numero % 2 === 0 ? "par" : "impar";
}

function evaluarNota(nota) {
  if (nota >= 60) {
    return "Aprobado";
  } else {
    return "Reprobado";
  }
}

function mayorDeTres(a, b, c) {
  return Math.max(a, b, c);
}

function clasificarEdad(edad) {
  if (edad >= 0 && edad <= 17) {
    return "menor";
  } else if (edad >= 18 && edad <= 64) {
    return "adulto";
  } else {
    return "mayor";
  }
}

// ============================================
// SECCIÓN 3: FUNCIONES Y BUCLES (20 puntos)
// ============================================

function factorial(n) {
  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}

function sumaHastaN(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

function tablaMultiplicar(numero) {
  const tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }
  return tabla;
}

function numerosPares(n) {
  const pares = [];
  for (let i = 2; i <= n; i += 2) {
    pares.push(i);
  }
  return pares;
}

// ============================================
// SECCIÓN 4: ARRAYS (25 puntos)
// ============================================

function sumaArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

function promedioArray(numeros) {
  if (numeros.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}

function encontrarMaximo(numeros) {
  let maximo = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  return maximo;
}

function filtrarMayores(numeros, limite) {
  const mayores = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      mayores.push(numeros[i]);
    }
  }
  return mayores;
}

function invertirArray(arr) {
  const invertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
  }
  return invertido;
}

// ============================================
// SECCIÓN 5: ARRAYS BIDIMENSIONALES (30 puntos)
// ============================================

function crearMatriz(filas, columnas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    const fila = [];
    for (let j = 0; j < columnas; j++) {
      fila.push(0);
    }
    matriz.push(fila);
  }
  return matriz;
}

function sumaMatriz(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
  }
  return suma;
}

function obtenerFila(matriz, indiceFila) {
  return matriz[indiceFila];
}

function obtenerColumna(matriz, indiceColumna) {
  const columna = [];
  for (let i = 0; i < matriz.length; i++) {
    columna.push(matriz[i][indiceColumna]);
  }
  return columna;
}

function transponer(matriz) {
  const transpuesta = [];
  const numColumnas = matriz[0].length;
  
  for (let j = 0; j < numColumnas; j++) {
    const fila = [];
    for (let i = 0; i < matriz.length; i++) {
      fila.push(matriz[i][j]);
    }
    transpuesta.push(fila);
  }
  return transpuesta;
}

// ============================================
// NO MODIFIQUES ESTA LÍNEA - NECESARIA PARA LOS TESTS
// ============================================
module.exports = {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
};
