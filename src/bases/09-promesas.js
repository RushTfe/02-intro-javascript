import {findHeroeById} from './bases/08-imp-exp'
import heroes from './data/heroes';


/*
const promesa = new Promise((resolve, reject) => {
    setTimeout( () => {
        // Importar get heroes by id
        const heroe = findHeroeById(2);
        resolve(heroe);
        //reject('No se pudo encontrar el héroe');
    }, 2000)
});


promesa
.then((heroe) => console.log(heroe))
.catch((error) => console.warn(error))
*/

const findHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = findHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000)
    });
}

findHeroeByIdAsync(1)
    .then (console.log)
    .catch(console.warn)