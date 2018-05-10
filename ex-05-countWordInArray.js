
/**
 * countWordInArray()
 *
 * Write a function called `countWordInArray` that takes 2 inputs: a string, and an array.
 * The function should return a number that is equal to the number of times the string-argument
 * is found in the array.
 *
**/
function countWordInArray(stRing, arRay) { // aqui esta un string y un array
  var resultado = 0    // me dide que retorne el numero de veces que aparece mi string en mi array, comienso en cero
  for (var i = 0; i < arRay.length; i++) {  //  cuento mis elemntos que hay en un array
    var elementos = arRay[i]      // mis elementos son todos los que contiene un Array ( ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', ])
    // console.log(elementos)     me muestra  todo llo que se encuentra en el array por eso el [i]

    if(stRing === elementos){        // comparo el que mi stRing y mi array que es mi elemento para saber cuantas veces encuentro una palabra dentro de mi arreglo
      resultado = resultado + 1      // mi resultado  aumenta 1 por que inicia en ceros
    }

    // if (stRing === elementos) {
    //   resultado = resultado + 1
    // console.log(elementos)
    //
    // }
  }
  console.log(resultado, elementos)         //muestra el resultado mas el elemento  osea el numero de veces que aparase mi strig dentro de mi array

  return resultado
}
//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var sentenceArray_1 = ['i', 'saw', 'my', 'brother', 'who', 'supposedly', 'saw', 'my', 'sister', 'take', 'a', 'saw'] //mi array
console.assert( countWordInArray('saw', sentenceArray_1) === 3) //mi string
console.assert( countWordInArray('take', sentenceArray_1) === 1)
console.assert( countWordInArray('brother', sentenceArray_1) === 1)
console.assert( countWordInArray('sister', sentenceArray_1) === 1)

var sentenceArray_2 = ["sister", "nancy", "take", 'the', 'first', 'right', 'and', 'take', 'the', 'third', 'left', 'on', 'sister', 'street']
console.assert( countWordInArray('take', sentenceArray_2) === 2)
console.assert( countWordInArray('brother', sentenceArray_2) === 0)
console.assert( countWordInArray('sister', sentenceArray_2) === 2)
