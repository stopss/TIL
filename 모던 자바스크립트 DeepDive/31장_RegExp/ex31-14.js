const target = 'A AA B BB Aa Bb AAA';

// A가 최소 1번 최대 2번 반복되는 문자열을 전역 검색
const regExp1 = /A{1,2}/g;
console.log(target.match(regExp1)); // -> [ 'A', 'AA', 'A', 'AA', 'A' ]

// A가 2번 반복되는 문자열을 전역 검색
const regExp2 = /A{2}/g;
console.log(target.match(regExp2)); // -> [ 'AA', 'AA' ]

// A가 최소 2번 이상 반복되는 문자열을 전역 검색
const regExp3 = /A{2,}/g;
console.log(target.match(regExp3)); // -> [ 'AA', 'AAA' ]

// A가 최소 한 번 이상 반복되는 문자열을 전역 검색
const regExp4 = /A+/g;
console.log(target.match(regExp4)); // -> [ 'A', 'AA', 'A', 'AAA' ]
