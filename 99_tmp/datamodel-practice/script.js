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

//const book1 = {
//    title: 'Harry Potter',
//    author: 'JK Rowling',
//    totalPages: 700,
//    pageRead: 400,
//    timeRead: 3
//};
//const book2 = {
//    title: 'Lord of the Prings',
//    author: 'JRR Tolkien',
//    totalPages:500,
//    pageRead: 0,
//    timeRead: 0
//};
//const book3 = {
//    title: 'Norwegian Wood',
//    author: 'Haruki Murakami',
//    totalPages:296,
//    pageRead: 296,
//    timeRead: 2
//};
//
//console.log(book1);
//console.log(book2);
//console.log(book3);

//Basic Requirement
//Like we did with books, think about what kinds of aspects of movies you would like to represent. A few ideas are:
//2.Write a factory function makeMovie that takes in inputs and outputs a movie object.
function makeMovie(title,director,year,times){
    return {
        title: title,
        director: director,
        year: year,
        times: times,
    }
}

const movie1 = makeMovie("norwegian wood","haruki murakami","1990",120);
const movie2 = makeMovie("norwegian wood","haruki murakami","1990",10);
const movies = [movie1,movie2];

//4.Declare a function displayMovie that works like displayBook, but for movies.
//function displayMovie(object){
//    console.log(object.title + "'s directory is  " + object.director);
//}

//how to maniplate object...
function displayMovie(object){
    console.log(object['title'] + "'s directory is  " + object['director']);
}

//output a messages to the console...
displayMovie(movie1);

// 5.Calculate the average length of your movies by writing a function called averageLength that will accept an array of movies as a parameter and output the average length. The difficulty of this problem is dependent on how you have chosen to store the duration.
function averageLength(movieObj){
        let averageLength = 0;
    for(let i = 0;i <= movieObj.length;i++){
        averageLength += movieObj[i]['times'];
    }
        return averageLength;
}

console.log(averageLength(movies));


