

//objetos literarios

// tenemos una llave que es nombre y el valor dentro de esa llave es lulu
const persona = {
    nombre: 'lulu',
    edad: 50,
    apellido: ' ´pulgarin',  
    direccion: {
        barrio: 'sanjavier',
        zip: 54545455,
        lat:12.333,
        lng: 34.343434
    }
};

console.log( persona); //asi recuperamos el nombre de lulu(p.n)

// creacion de otoro objeto(CLONACION DEL OBJ DE ARRIBA) FORMA INCORRECTA
// const persona2 = persona;  //al hacer esto estamos capturando la referencia del primer obj

//FORMA CORRECTA ES CREAR OTRO OBJETO 
const persona2 = {...persona}; //con esto hacemos un clon del objeto
persona2.nombre = 'caremonda';  //esto da un falso positivo.


console.log( persona2)   









