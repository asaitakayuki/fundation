'use strict'
// Please don't delete the 'use strict' line above

//TEST
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

/**
 *  1.
 *  Print allPokemon to your Chrome console to see what it looks like. (This is already done for you.)
 */
//console.log(allPokemon)

 /**
  * Print the length.
  */

//console.log(allPokemon.length)

  /**
   * 3.Print out the first Pokemon and look at what a Pokemon objec looks like.
   */

console.log(allPokemon[0])


/**
 * Basic Requirements
 */

 /**
  * 1.Declare a function getNames that returns an array of all the name of Pokemon in the data set.
  */

function getNames(){
    let allPokemonName = [];
    
    for(let i=0; i < allPokemon.length; ++i){
        let pokemonName = allPokemon[i].Name;
        allPokemonName.push(pokemonName);
    }
    
    return allPokemonName;
}
console.log(test(getNames(), getNamesResult));