'use strict'
// Please don't delete the 'use strict' line above

const obj1 = ({a: "A"},{b: "B"});
//const obj2 = ({a: "A"},{b: "B"});
const obj2 = ({b: "B"},{a: "A"});

_
console.log(_.isEqual(obj1,obj2));