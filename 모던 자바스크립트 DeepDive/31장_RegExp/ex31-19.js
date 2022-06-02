const target = 'A AA B BB Aa Bb';

// 'A' 또는 'B'를 전역 검색
const regExp1 = /A|B/g;
console.log(target.match(regExp1)); 
// -> ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B']

// 'A' 또는 'B'를 전역 검색
// 분해되지 않는 단어 레벨로 검색
const regExp2 = /A+|B+/g;
console.log(target.match(regExp2)); 
// -> ['A', 'AA', 'B', 'BB', 'A', 'B']

// regExp2와 동일
const regExp3 = /[AB]+/g;
console.log(target.match(regExp3)); 
// -> ['A', 'AA', 'B', 'BB', 'A', 'B']