// ES5
var arr1 = [1, 2].concat([3, 4]);
console.log(arr1);   //[1, 2, 3, 4]

// ES6
const arr2 = [...[1, 2], ...[3, 4]];
console.log(arr2);   // [1, 2, 3, 4]