const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;

// console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}


const [letras, numeros] = retornaArreglo();

// console.log(letras);
// console.log(numeros);

// Tarea

// 1. El primer valor del arr se llamará nombre
// 1. El primer valor del arr se llamará asignarNombre
const usarState = (valor) => {
    return [valor, () => { console.log('Hola Mundo')}];
}

const arr = usarState('Goku');

// console.log(arr);

// arr[1]();

const [nombre, asignarNombre] = arr;

console.log(nombre);
asignarNombre();