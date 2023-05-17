/*Crear una función join que reciba un arreglo 
y retorne un string con todos los elementos separados 
por espacio sin usar el método join de los arreglos.*/

// escribe la función join acá

function join(arrayString)
{
    let aux = " "
    
   
    for(let i = 0;i< arrayString.length;i++)
    {
        aux =  aux + " " + arrayString[i]
    }
    return (aux)
    
    
}


console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""