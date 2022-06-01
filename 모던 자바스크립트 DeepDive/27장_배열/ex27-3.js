const arr = [0];

arr[1] = 1;

arr[100] = 100;
console.log(arr);       // [ 0, 1, <98 empty items>, 100 ]
console.log(arr.length);    // 101