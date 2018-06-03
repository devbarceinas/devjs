// Crear un arreglo

const numeros = [10,20,30,40,50];
// console.log(numeros);

// Areglo de Strings (método alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
// console.log(meses.length);

// Añadir en un arreglo
meses[4] = 'Mayo';
meses.push('Junio');
// Añadir al inicio del arreglo
meses.unshift('Mes 0');
// Como eliminar un elemento de un arreglo
meses.pop()
// Eliminar un elemento del arreglo (el primero)
meses.shift();
// Quitar un elemento definiendo un rango
meses.splice(2,1);
// revertir un arreglo
meses.reverse();
// Unit un arreglo con otro
let arregloOne = [1,2,3],
    arregloTwo = [9,8,7];

console.log(arregloOne.concat(arregloTwo));

// Ordenar un arreglo
const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];
frutas.sort();
console.log(frutas);

// Ordenar números
let arregloThree = [3,4,5,66,7,89,56,1,7654,234];
arregloThree.sort((x, y) => {
    //return x - y;
    return y - x; 
});
console.log(arregloThree);

// Encontrar un elemento en el arreglo
// console.log(meses.indexOf('Abril'));