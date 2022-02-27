import heroes, {owners} from "../data/heroes";

export const findHeroeById = (id) => heroes.find(heroe => heroe.id ===id);

// console.log(findHeroeById(2));


export const findHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

// console.log(findHeroesByOwner('DC'));

//console.log(owners);