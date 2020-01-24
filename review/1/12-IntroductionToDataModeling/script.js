'use strict'
// Please don't delete the 'use strict' line above

/**
 * lecture
 */

 // Nested Obejct
 // I practice manipulate the nested Obejct...

 const pets = [
     {
         type: 'cat',
         name: 'Meowze',
         colors: [
             'black',
             'tan',
             'whilte'
         ]
     },
     {
         type: 'cat',
         name: 'Miwa',
         owner: {
             name: 'fleix'
         }
     },
     {
         type: 'dog',
         name: 'Hana',
         colors: [
             'brown',
             'black',
             'white'
         ]
     }
 ]

//manipulate nested object and array
//Before executing your code,I should expect the result..

console.log(typeof pets[2]);//typeof returns type of data...So,I think should be return object.
console.log(pets[1]); //return the object data including owner key.....
console.log(pets[1].type);//cat.indicate the posion in pets obejct.And,key value type return cat!!!
console.log(pets[0]['name']);//Meowze.pets[0] get the object index position 0. Get the value from key ..
console.log(pets[1].colors);//undefined??There is not such a key value.(colors)

