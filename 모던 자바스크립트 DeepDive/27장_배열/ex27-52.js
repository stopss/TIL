const arr = [1, 2];

// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 lengh 프로퍼티 값을 반환
let result = arr.unshift(3, 4);
console.log(result);    // 4

// unshift 메서드는 원본 배열을 직접 변경
console.log(arr);       // [3, 4, 1, 2]