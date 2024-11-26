const notas = [6, 8, 9, 2, 5, 10];

const suma = function (notasArray) {
    return notasArray.reduce((total, nota) => total + nota, 0);
};

const prom = function (notasArray) {
    const sumaNotas = suma(notasArray); 
    return sumaNotas / notasArray.length;
};

console.log(prom(notas)); 