'use strict'
// Please don't delete the 'use strict' line above

//declare variables
let actual;
let expected;

/**
 * 1.Dcleare a function describeTheWeather.
 */
function describeTheWeather(currentSeason,currentTemperature){
    if(currentSeason === "Spring" && currentTemperature === "warm"){
        return "The temperature is normal for the season."        
    }else if(currentSeason === "Summer" && currentTemperature === "hot"){
        return "The temperature is normal for the season."        
    }else if(currentSeason === "Fall" && currentTemperature === "cool"){
        return "The temperature is normal for the season."        
    }else if(currentSeason === "Winter" && currentTemperature === "cold"){
        return "The temperature is normal for the season."        
    }else{
        return "The temperature is unusual for the season."
    }
}

//TEST code
actual = describeTheWeather("Spring", "warm");
expected = "The temperature is normal for the season.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = describeTheWeather("Spring", "cold");
expected = "The temperature is unusual for the season.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure your code is correct.
