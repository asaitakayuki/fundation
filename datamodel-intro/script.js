'use strict'
// Please don't delete the 'use strict' line above

//function createBook(author,title,totalOfPage){
//    return {
//        title: title,
//        author: author,
//        totalOfPage: totalOfPage,
//        pageRead: 0,
//        timeRead: 0
//    }
//}
//
//function displayBook(book){
//    console.log(book.title + " by " + book.author);
//}
//
//function updatePages(book,pageRead){
//    book.pageRead += pageRead;
//    if( book.totalOfPage >= book.pageRead){
//        book.timeRead++;
//        book.pageRead = 0;
//    }
//}
//
////
//const book1 = createBook("Yan","javascripts",100);
//
//
//console.log(book1);
//displayBook(book1);

//Excesese
//basic requirement..
//1
//to do nothing???
//2
function makeMovie(title,director,year,person){
    return {
        title: title,
        director: director,
        year: year,
        person: person
    }
}
//TEST
// console.log(makeMovie("Jurassic Park", "Steven Spielberg", "1994","Kiefer Sutherland"));

//3.Make five more movie objects using your factory function and store them in an array called movies
//make five object.
const movie1= makeMovie("Jurassic Park", "Steven Spielberg", "1994","Kiefer Sutherland");
//init array
let movies =[movie1];

console.log(movies[0]);