const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 요소 20, 30을 삽입
const result = arr.splice(1, 2, 20, 30);
// 제거한 요소가 배열로 반환
console.log(result);    // [2, 3]
// splice 메서드는 원본 배열을 직접 변경
console.log(arr);       // [1, 20, 30, 4]


// 원본 배열[1, 20, 30, 4]의 인덱스 1부터 0개의 요소를 제거하고 그 자리에 새로운 요소 100을 삽입
result2 = arr.splice(1, 0, 100);
console.log(result2);   // []
console.log(arr);       // [1, 100, 20, 30, 4]

// 원본 배열[1, 100, 20, 30, 4]의 인덱스 1부터 2개의 요소를 제거
const result3 = arr.splice(1, 2);
console.log(result3);   // [100, 20]
console.log(arr);       // [1, 30, 4]

// 원본 배열[1, 30, 4]의 인덱스 1부터 모든 요소를 제거
const result4 = arr.splice(1);
console.log(result4);   // [30, 4]
console.log(arr);       // [1]




