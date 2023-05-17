/*Crea una función maxIndex que 
reciba una arreglo de números y retorne el 
índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1.*/

// escribe la función maxIndex acá
function maxIndex(array)
{

   
    if(array > "")
    {
    let aux = 0
    let pos = ""
        for(let i = 0;i<= array.length;i++)
        {
        
            if (array[i] > aux)
            {
            aux = array[i]        
            pos = i       
            }
            
        }

        return ("El número mayor es: " + aux + " y su indice es: " + pos)
    }
    else
    {
        return ("-1")
    }
    
}



console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1