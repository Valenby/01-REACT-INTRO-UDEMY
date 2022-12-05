import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher )=>{

    const validPublishers = [ 'DC Magos', 'ADC', 'Top'];
        if ( !validPublishers.includes(publisher)) {
             throw new Error(`${ publisher } no existe este campo`);
        }
        return heroes.filter( heroe => heroe.publisher === publisher);
    
}