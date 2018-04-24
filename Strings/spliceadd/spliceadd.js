'use strict';
var arr = [
    "Banana", "Orange", "Apple", "Mango"
];
var res = arr.splice(2, 0, "Lemon", "Kiwi");
console.log('result is',res);
console.log(arr);