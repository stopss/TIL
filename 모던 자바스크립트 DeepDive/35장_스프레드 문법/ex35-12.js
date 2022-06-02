// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

Array.prototype.splice.apply(arr1, [1,0].concat(arr2));
console.log(arr1);      // [1, 2, 3, 4]