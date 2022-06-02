const arr = [1, 2, 3, 4, 5];

// 인수로 전달받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
arr.fill(0);
console.log(arr);   // [0, 0, 0, 0, 0]

// 인수로 전달받은 값 1을 배열의 인덱스 1부터 끝까지 요소로 채운다.
arr.fill(1, 1);
console.log(arr);   // [0, 1, 1]


arr.fill(2, 1, 3);
console.log(arr);   // [0, 2, 2]