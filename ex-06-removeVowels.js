/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/


function removeVowels(str) {
  // console.log(str)
  var resultado = []
  for (var i = 0; i < str.length; i++) {
    var nombres =  str[i].toLowerCase()
    // console.log(nombres)
    if (nombres !== "a" && nombres !== "e" && nombres !== "i" && nombres !== "o" && nombres !== "u"   ){
      resultado.push(nombres)


    }




  }
var palabra = resultado.join("")
console.log(palabra)
return palabra



}








//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
