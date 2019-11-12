'use strict'
// Please don't delete the 'use strict' line above

// maniplate,retriveing data from nested array and objects....
//const pets = [
//    {
//        type: 'cat',
//        name: 'Meowze',
//        colors: [
//            'block',
//            'tan',
//            'white'
//        ]
//    },
//    {
//        type: 'cat',
//        name: 'Mia',
//        owner: {
//            name: 'felix'
//        }
//    },
//    {
//        type: 'dog',
//        name: 'hana',
//        colors: [
//            'brown',
//            'black',
//            'white'
//        ]
//    }
//]

//console.log(pets[0]);
//console.log(pets[1]);
//console.log(pets[2]);

//TEST
//console.log(typeof pets[2]); //should print object.
//console.log(pets[1]); //should print data of object..
//console.log(pets[1].type); // cat
//console.log(pets[0]['name']); //
//console.log(pets[0].name);// same above...
//console.log(pets[1].colors);//undefined

/*
Books and sheffs project
*/


//create a books object

const book1 = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    totalPages: 700,
    pageRead: 400,
    timeRead: 3
};
const book2 = {
    title: 'Lord of the Prings',
    author: 'JRR Tolkien',
    totalPages:500,
    pageRead: 0,
    timeRead: 0
};
const book3 = {
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    totalPages:296,
    pageRead: 296,
    timeRead: 2
};

console.log(book1);
console.log(book2);
console.log(book3);