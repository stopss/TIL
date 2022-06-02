const arr = [1, 2, 3];

// arr[0]부터 arr[1]이전
arr.slice(0, 1);    // -> [1]
// 원본은 변경되지 않는다.
console.log(arr);   // [1, 2, 3]

// arr[1]부터 이후의 모든 요소를 복사하여 반환
arr.slice(1);       // -> [2, 3]

// 배열의 끝에서부터 요소를 두 개 복사하여 반환
arr.slice(-2);      // -> [2, 3]

// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환
const copy = arr.slice()
console.log(copy);  // [1, 2, 3]
// copy와 arr는 참조값이 다른 별개의 객체이다
console.log(copy === arr);  // false
// 배열 요소의참조값이 같다. 즉, 얕은 복사되었다
console.log(copy[0] === arr[0]);    //true