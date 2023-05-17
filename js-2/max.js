/*Crea una función max que reciba un arreglo de 
números y retorne el número máximo sin usar el 
método Math.max de JavaScript. Si el arreglo está 
vacío debe retornar undefined*/

// escribe la función max acá

function max(array)
{

   
    if(array > "")
    {
    let aux = 0
        for(let i = 0;i<= array.length;i++)
        {
        
            if (array[i] > aux)
            {
            aux = array[i]        
                        
            }
        
        }

        return ("El número mayor es: " + aux)
    }
    else
    {
        return ("undefined")
    }
    
}



///////////////////////
console.log(max([1, 3, 2,])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined