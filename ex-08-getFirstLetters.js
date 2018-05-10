
/**
 * getFirstLetters()
 *
 * Write a function called `getFirstLetters` that takes an array of strings
 * and returns another array of strings with only the first letter
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

function getFirstLetters(arrAy) {
  var primerLetra = []
  for (var i = 0; i < arrAy.length; i++) {
    var elementoArray = arrAy[i]
    // console.log(elementoArray [i])
    var charElem = elementoArray[0]

    primerLetra.push(charElem)

  }
  console.log(primerLetra)
  return primerLetra
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
let outputArray1 = getFirstLetters(['wow', 'milk', 'howdy', 'sweet', 'bye'])
console.assert( Array.isArray(outputArray1) === true )
console.assert( outputArray1[0] === 'w')
console.assert( outputArray1[1] === 'm')
console.assert( outputArray1[2] === 'h')
console.assert( outputArray1[3] === 's')
console.assert( outputArray1[4] === 'b')



let outputArray2 = getFirstLetters(['kayak', 'chair', 'jacket', 'nice!'])
console.assert( Array.isArray(outputArray2) === true )
console.assert( outputArray2[0] === 'k' )
console.assert( outputArray2[1] === 'c' )
console.assert( outputArray2[2] === 'j' )
console.assert( outputArray2[3] === 'n' )
