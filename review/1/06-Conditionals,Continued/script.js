'use strict'
// Please don't delete the 'use strict' line above


function isHotCold(temp){
    if ( temp > 20 && temp < 26) {
     	return "temperature is comfortable";
    } else if (temp < 20 || temp > 26){
     	return "temperature is too cold or hot";
    }else{
     	return "you may wrong temperautre"
    }
}

console.log(isHotCold(21)); //
console.log(isHotCold(19)); //
console.log(isHotCold(100)); //
console.log(isHotCold(20)); //
