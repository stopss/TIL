const target = 'Is this all there is?';

// 임의의 3자리 문자열을 대소문자를 구별하여 전역 검색
// . 이 3개 연속이면 문자의 내용과 상관없이 3 자리 문자열과 매치(공백 포함)
const regExp = /.../g;

console.log(target.match(regExp));  
// -> ['Is ', 'thi', 's a', 'll ','the', 're ', 'is?']