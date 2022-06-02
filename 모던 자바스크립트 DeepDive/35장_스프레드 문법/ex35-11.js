// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

arr1.splice(1, 0, arr2);
// 기대한 결과는 [1, 2, 3, 4]이다.
console.log(arr1);  // [ 1, [ 2, 3 ], 4 ]