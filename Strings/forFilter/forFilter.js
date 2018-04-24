'use strict';
var arr = [
    1,
    2,
    3,
    4,
    5
];
var arr1=arr.filter(function(x) {
    if(x%2 == 0)
    return true;
});
console.log(arr1);