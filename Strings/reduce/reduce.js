'use strict';
var arr = [
    1,
    2,
    3,
    4
];
var arr1 = arr.reduce(function(a,x){
console.log(a,x);
return a+x;
},0);
console.log(arr1);