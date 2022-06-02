const target = 'AA BB Aa Bb 12';

// 'A' ~ 'Z' 한 번 이상 반복되는 문자열을 전역 검색
const regExp1 = /[A-Z]+/g;
target.match(regExp1);  // -> [ 'AA', 'BB', 'A', 'B' ]

// 'A' ~ 'Z' 또는 'a' ~ 'z'가 한 번 이상 반복되는 문자열을 전역 검색
// 대소문자 구별x 알파벳을 검색하는 방법
const regExp2 = /[A-Za-z]+/g;
target.match(regExp2);  // -> [ 'AA', 'BB', 'Aa', 'Bb' ]