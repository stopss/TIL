const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열 arr의 마지막 요소로 추가하고 변경된 length 값을 반환
let result = arr.push(3, 4);
console.log(result);    // 4

// push 메서드는 원본 배열을 직접 변경
console.log(arr);   // [1, 2, 3, 4]

// arr.push(5)과 동일한 처리
// 이 방법이 push 메서드보다 빠르다
arr[arr.length] = 5;
console.log(arr); // [ 1, 2, 3, 4, 5 ]