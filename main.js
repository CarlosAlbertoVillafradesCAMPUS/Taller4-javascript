let option;
let myObjects = {};
let myArray = [];
let arrayObjetos = []

while (option != -1) {
    option = Number(prompt(`-------MENU-------
    1. Lectura de Datos
    2. Crear Objeto
    3. Mostrar Objeto
    4. Crear Array
    5. Mostrar Array
    6. Elimar primer elemento del Array
    7. Eliminar ultimo elemento del Array
    8. Eliminar cualquier elemento del Array
    9. Agregar elemento al comienzo del array
    10. Agregar elementoal final del Array
    11. Crear Array con objetos
    12. Iterar Array con objetos con FOR
    13. Iterar Array con objetos con ForEach
    14. Iterar Array con objetos con Map
    15. Proceso Personal
    0. Salir
    `)); 

    switch (option) {
        case 1 : lecturaDatos(); break;
        case 2 : crearObjeto(); break;
        case 3 : mostrarObjeto(); break;
        case 4 : crearArray(); break;
        case 5 : mostrarArray(); break;
        case 6 : deletePrimer(); break;
        case 7 : deleteUltimo(); break;
        case 8 : deleteDato(); break;
        case 9 : agregarDatoPrincipio(); break;
        case 10 : agregarDatoFinal(); break;
        case 11 : crearArrayObjetos(); break;
    }
}


function crearObjeto() {
    let newObject = prompt('Digite el nombre del objeto')
    myObjects[`${newObject}`] = {}
    let cantPropiedades = Number(prompt(`Cuantas propiedades quiere que tengo su objeto ${newObject}`));

    for (let i = 1; i <= cantPropiedades; i++) {
        let namePropiedad = prompt(`Nombre de la propiedad ${i}`);
        let tipoPropiedad = Number(prompt(`Seleccione el tipo de dato para agregar a la propiedad ${namePropiedad}:
        1. String
        2. Number
        3. Booleano `));
        let valorPropiedad;
        switch (tipoPropiedad){
            case 1:  valorPropiedad = prompt(`Valor string de la propiedad ${namePropiedad}`); break;
            case 2:  valorPropiedad = Number(prompt(`Valor numerico de la propiedad ${namePropiedad}`)); break;
            case 3: {
                let optionBool = Number(prompt(`Seleccione valor Booleano de la propiedad ${namePropiedad}\n1.True\n2.False`));
                (optionBool === 1) ?valorPropiedad = true : valorPropiedad = false 
            }; break;
        }
        myObjects[`${newObject}`][`${namePropiedad}`] = valorPropiedad;
    }
    alert(`Objeto creado con exito`);
}

function mostrarObjeto() {
    alert(JSON.stringify(myObjects, null, 4));
}

function crearArray() {
    myArray = []
    let cantArray = Number(prompt(`Cuantos datos dejea agregar al array`))

    for (let i = 1; i <= cantArray; i++) {
        let dato = prompt(`Digite el dato ${i} que desea agregar al array`)
        myArray.push(dato)    
    }
    alert('Array creado con exito')
}

function mostrarArray() {
    alert(myArray);
}

function deletePrimer() {
    if (myArray.length != 0){
        const Array = myArray;
        myArray.shift();
        alert(`${Array}\nPrimer elemento eliminado del array\n${myArray}`)
    } else{
        alert(`No existen datos en el array`)
    } 
}

function deleteUltimo() {
    if (myArray.length != 0){
        const Array = myArray;
        myArray.pop()
        alert(`${Array}\nUltimo elemento eliminado del array\n${myArray}`)
    } else{
        alert(`No existen datos en el array`)
    } 
    
}

function deleteDato() {
    if (myArray.length != 0){
        let elemento = prompt(`${myArray}
        Digite el elemento que desea eliminar del array`)

        let position = myArray.indexOf(elemento)
        let position2 = position + 1
        myArray.splice(position, position2);
        
        alert(`${elemento} eliminado del array\n${myArray}`)
    } else{
        alert(`No existen datos en el array`)
    } 
   
}

function agregarDatoPrincipio () {
    let dato = prompt(`Digite el dato agregar al array`)
    myArray.unshift(dato)
    alert(`${dato} Agregado con exito\n${myArray}`)
}

function agregarDatoFinal() {
    let dato = prompt(`Digite el dato agregar al array`)
    myArray.push(dato)
    alert(`${dato} Agregado con exito\n${myArray}`)
}

function crearArrayObjetos() {
    let newObject = prompt('Digite el nombre del objeto')
    arrayObjetos.unshift(newObject);
    arrayObjetos[0] = {}
    let cantPropiedades = Number(prompt(`Cuantas propiedades quiere que tengo su objeto ${newObject}`));

    for (let i = 1; i <= cantPropiedades; i++) {
        let namePropiedad = prompt(`Nombre de la propiedad ${i}`);
        let tipoPropiedad = Number(prompt(`Seleccione el tipo de dato para agregar a la propiedad ${namePropiedad}:
        1. String
        2. Number
        3. Booleano `));
        let valorPropiedad;
        switch (tipoPropiedad){
            case 1:  valorPropiedad = prompt(`Valor string de la propiedad ${namePropiedad}`); break;
            case 2:  valorPropiedad = Number(prompt(`Valor numerico de la propiedad ${namePropiedad}`)); break;
            case 3: {
                let optionBool = Number(prompt(`Seleccione valor Booleano de la propiedad ${namePropiedad}\n1.True\n2.False`));
                (optionBool === 1) ?valorPropiedad = true : valorPropiedad = false 
            }; break;
        }
        arrayObjetos[0][`${namePropiedad}`] = valorPropiedad;
    }
    alert(`Objeto creado con exito`);
    alert(JSON.stringify(arrayObjetos, null, 4));
}