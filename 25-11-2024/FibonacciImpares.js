// Función para generar la secuencia de Fibonacci entre 0 y un maximo
function fibonacciEnRango(n) {
    const fibonacci = [0, 1];
    while (true) {
        const proxNum= fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (proxNum > n) break; // Salir si el número supera el rango designado
        fibonacci.push(proxNum);
    }
    return fibonacci;
}
// Función para filtrar números impares
function filtrarImpares(array) {
    return array.filter(num => num % 2 !== 0);
}

// Generamos y mostramos los números impares de Fibonacci entre 0 y 1000
const maximo = 1000;
const secuencia = fibonacciEnRango(maximo);
const numerosImpares = filtrarImpares(secuencia);
console.log(`Números impares de Fibonacci entre 0 y ${maximo}:`, numerosImpares);
