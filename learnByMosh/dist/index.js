"use strict";
console.log('start to typescript from 8/23 ');
var age = 20;
if (age < 50) {
    age += 10;
}
console.log(age);
;
var mySize = 2 /* medium */;
console.log(mySize);
// Function
function calculate(tax, year) {
    if (year === void 0) { year = 2023; }
    if (year <= 2023) {
        return tax * 1.2;
    }
    else {
        return tax * 1.3;
    }
}
calculate(1000);
//# sourceMappingURL=index.js.map