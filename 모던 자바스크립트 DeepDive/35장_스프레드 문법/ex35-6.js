var arr = [1,2,3];

// 배열을 함수의 인수 목록으로 전달하면 NaN으로 반환
// 그래서 배열을 펼쳐서 요소들을 개별적인 값들의 목록으로 인수를 전달해야 한다.
var max = Math.max(arr);
console.log(max);   // NaN

// 스프레드 문법이 제공되기 전
// 배열을 펼쳐서 요소들의 목록을 함수의 인수로 전달하고 싶을 때
// Function.prototype.apply 사용
var max = Math.max.apply(null, arr);
console.log(max);    // 3

