//Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

// escribe la función sum acá

function sum(array)
{
   let aux = 0
   let i = 0
   while (i < array.length)
      {
      
         aux = array[i] + aux
         i++

      
      }
   
   return ("LA SUMA TOTAL DE LOS ELEMENTOS DEL ARRAY ES:  " + aux)
   
}


console.log(sum([1,2,3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0