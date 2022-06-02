const target = 'AA BB 12,345';

// '0' ~ '9'가 한 번 이상 반복되는 문자열을 전역 검색
const regExp1 = /[0-9]+/g;
console.log(target.match(regExp1)); // -> [ '12', '345' ]

// '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색
const regExp2 = /[0-9,]+/g;
console.log(target.match(regExp2)); // -> [ '12,345' ]

// '\d'는 숫자를 의미
// '\D'는 문자를 의미
const regExp3 = /[\d,]+/g;
console.log(target.match(regExp3)); // -> [ '12,345' ]

const regExp4 = /[\D,]+/g;
console.log(target.match(regExp4)); // -> [ 'AA BB ', ',' ]

