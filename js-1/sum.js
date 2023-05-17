/*En un archivo llamado sum.js escribe una función llamada suma 
que reciba un número positivo y retorne la suma de todos los 
números desde 1 hasta ese número. Debes ejecutar tu archivo 
usando node.js node sum.js*/

// escribe la función suma acá
function sum(valor)
{
    contador = 0;
    
    for(i= 1;i <= valor;i++)
    {
       contador = contador  + i;
        
    }
    return "El resultado es: " + contador;
}


// código de prueba
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120