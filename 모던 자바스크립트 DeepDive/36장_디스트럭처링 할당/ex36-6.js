// 할당의 기준인 배열의 인덱스이다.
const [a, b] = [1, 2];
console.log(a, b);  // 1 2

// 변수의 개수와 iterable 요소의 개수가 일치할 필요는 없다.
const [c, d] = [1];
console.log(c, d);  // 1 undefined

// 변수의 개수와 iterable 요소의 개수가 일치할 필요는 없다.
const [e, f] = [1, 2, 3];
console.log(e, f);  // 1 2

const [g, , h] = [1, 2, 3];
console.log(g, h);  // 1 3