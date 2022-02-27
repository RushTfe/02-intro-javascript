const saludar = function saludar(nombre) {
    return `Hola, ${nombre}`;
}
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `HolaMundo`;

const getUser = () =>
(
    {
        userId: 12,
        username: 'Pepe'
    }
)

console.log(saludar2('Goku'));
console.log(saludar3('Goku'));
console.log(saludar4('Goku'));
console.log(getUser());


// 1. Transformar a lambda
// 2. Debe retornar un objeto implicito
// 3. Pruebas
function getUsuarioactivo(nombre) {
    return {
        uid: "bla",
        username: nombre
    }
};

const usuarioActivo = getUsuarioactivo('Pepe');

console.log(usuarioActivo);

// Solución

const usuarioActivoFunct = (nombre) => (
    {
        uid: 'tarea',
        nombre: nombre
    }
);

console.log(usuarioActivoFunct('Julián'));