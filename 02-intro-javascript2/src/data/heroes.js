


// FUNCIONES COMUNES DE ARREGLOS(IMPORT, EXPORT):


//arreglo con difernetes objetos
//palabra export para poder importar el contenido y no aparezca undefind


// export const heroes, forma de exportar
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//exportaciones individules
 export const owners = ['DC','Marvel'];
// 2 forma de exportar
export default heroes; 
